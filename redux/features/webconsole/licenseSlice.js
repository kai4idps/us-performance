import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIS } from 'utils/env';
import { FAAS_SALE_TYPE, FDN_PLAN_KEYS } from 'config/webconsole';
import { axiosPost } from 'utils/helpers';

const initialState = {
    fetchingLicenseStatus: 'idle',
    error: null,
    license: null,
    featureSet: [],
    selectedPlan: null,
};

export const fetchLicenseRequest = createAsyncThunk(
    'device/fetchLicenseRequest',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.GET_LICENSE, data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

const normalizeIntroPrice = (plans) => {
    const planKeys = Object.keys(plans);
    const monthlyPlanId = planKeys.filter(planId => plans[planId]?.ExtendDays === 31)[0];
    const monthlyPlan = plans[monthlyPlanId];
    return {
        price: monthlyPlan?.IntroCentAmount,
        currency: monthlyPlan?.Currency
    };
};

const normalizePlanPrice = (plans) => {
    const normalizedPlanId = {};
    const planKeys = Object.keys(plans);
    planKeys.forEach((planId) => {
        if (plans[planId].ExtendDays === 31 && plans[planId]?.LicenseType === 'SUBSCRIPTION') {
            normalizedPlanId[FDN_PLAN_KEYS.MONTHLY] = planId;
        } else if (plans[planId].ExtendDays === 366 && plans[planId]?.LicenseType === 'SUBSCRIPTION') {
            normalizedPlanId[FDN_PLAN_KEYS.YEARLY] = planId;
        } else if (plans[planId].ExtendDays === 731 && plans[planId]?.LicenseType === 'SUBSCRIPTION') {
            normalizedPlanId[FDN_PLAN_KEYS.TWO_YEAR] = planId;
        }
    });
    const monthlyPlan = plans[normalizedPlanId[FDN_PLAN_KEYS.MONTHLY]];
    const yearlyPlan = plans[normalizedPlanId[FDN_PLAN_KEYS.YEARLY]];
    const twoYearPlan = plans[normalizedPlanId[FDN_PLAN_KEYS.TWO_YEAR]];
    const monthlyPriceComparedBased = monthlyPlan?.CentAmount || yearlyPlan?.CentAmount / 10;
    const planPrice = {
        [FDN_PLAN_KEYS.MONTHLY]: monthlyPlan ? {
            price: monthlyPlan?.CentAmount,
            currency: monthlyPlan?.Currency,
            planId: normalizedPlanId[FDN_PLAN_KEYS.MONTHLY],
            extendDays: monthlyPlan?.ExtendDays,
        } : null,
        [FDN_PLAN_KEYS.YEARLY]: yearlyPlan ? {
            price: yearlyPlan?.CentAmount,
            originalPrice: monthlyPriceComparedBased * 12,
            currency: yearlyPlan?.Currency,
            planId: normalizedPlanId[FDN_PLAN_KEYS.YEARLY],
            extendDays: yearlyPlan?.ExtendDays,
        } : null,
        [FDN_PLAN_KEYS.TWO_YEAR]: twoYearPlan ? {
            price: twoYearPlan?.CentAmount,
            originalPrice: monthlyPriceComparedBased * 24,
            currency: twoYearPlan?.Currency,
            planId: normalizedPlanId[FDN_PLAN_KEYS.TWO_YEAR],
            extendDays: twoYearPlan?.ExtendDays,
        } : null
    };
    const introPlans = {
        [FDN_PLAN_KEYS.MONTHLY]: monthlyPlan ? !!monthlyPlan?.IntroCentAmount : false,
        [FDN_PLAN_KEYS.YEARLY]: yearlyPlan ? !!yearlyPlan?.IntroCentAmount : false,
        [FDN_PLAN_KEYS.TWO_YEAR]: twoYearPlan ? !!twoYearPlan?.IntroCentAmount : false
    };
    return { planPrice, introPlans, plansId: normalizedPlanId };
};

const normalizeLicense = (license) => {
    const accountServiceStatus = license?.AccountServiceStatus;
    const dueTime = license?.License?.ExpireDate;
    const extendDays = license?.License?.ExtendDays;
    const timeLeftDays = license?.License?.TimeLeftDays;
    const licenseType = license?.License?.LicenseType;
    const isAutoRenew = license?.License?.IsAutoRenew;
    const servicePlanId = license?.License?.ServicePlanId;
    const subscriptionStatus = license?.License?.SubscriptionStatus;
    const featureSet = license?.FeatureSet;
    const plans = license?.Permission;
    const isFaaS = FAAS_SALE_TYPE.indexOf(license?.License?.SaleType) > -1;

    const { planPrice, introPlans, plansId } = normalizePlanPrice(plans);
    const introPrice = normalizeIntroPrice(plans);

    return {
        timeLeftDays,
        dueTime,
        accountServiceStatus,
        isAutoRenew,
        isFaaS,
        extendDays,
        licenseType,
        plans,
        planPrice,
        introPlans,
        plansId,
        introPrice,
        featureSet,
        servicePlanId,
        subscriptionStatus,
    };
};

const licenseSlice = createSlice({
    name: 'license',
    initialState,
    reducers: {
        initLicenseState: (state, action) => {
            state.fetchingLicenseStatus = 'idle';
            state.error = null;
        },
        updateSelectedPlan: (state, action) => {
            state.selectedPlan = action.payload;
        },
    },
    extraReducers: {
        [fetchLicenseRequest.pending]: (state, action) => {
            state.fetchingLicenseStatus = 'loading';
        },
        [fetchLicenseRequest.fulfilled]: (state, action) => {
            const {
                timeLeftDays,
                dueTime,
                accountServiceStatus,
                isAutoRenew,
                isFaaS,
                extendDays,
                licenseType,
                plans,
                planPrice,
                introPlans,
                plansId,
                introPrice,
                featureSet,
                servicePlanId,
                subscriptionStatus,
            } = normalizeLicense(action.payload);
            state.timeLeftDays = timeLeftDays;
            state.dueTime = dueTime;
            state.accountServiceStatus = accountServiceStatus;
            state.isAutoRenew = isAutoRenew;
            state.isFaaS = isFaaS;
            state.extendDays = extendDays;
            state.licenseType = licenseType;
            state.plans = plans;
            state.planPrice = planPrice;
            state.introPlans = introPlans;
            state.plansId = plansId;
            state.introPrice = introPrice;
            state.featureSet = featureSet;
            state.servicePlanId = servicePlanId;
            state.subscriptionStatus = subscriptionStatus;
            state.license = action.payload;
            state.fetchingLicenseStatus = 'succeeded';
        },
        [fetchLicenseRequest.rejected]: (state, action) => {
            state.error = action.payload;
            state.fetchingLicenseStatus = 'failed';
        },
    }
});

export const {
    initLicenseState,
    updateSelectedPlan
} = licenseSlice.actions;

export default licenseSlice.reducer;
