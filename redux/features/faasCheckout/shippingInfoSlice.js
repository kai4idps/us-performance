import { createSlice } from '@reduxjs/toolkit';
import { isEmpty, validateExpression } from 'utils/helpers';

const initialState = {
    firstName: {
        value: '',
        status: 'idle',
    },
    lastName: {
        value: '',
        status: 'idle',
    },
    email: {
        value: '',
        status: 'idle',
    },
    phoneNumber: {
        value: '',
        status: 'idle',
    },
    address1: {
        value: '',
        status: 'idle',
    },
    address2: {
        value: '',
        status: 'valid', //don't need to check validation
    },
    country: {
        value: 'us',
        status: 'valid',
    },
    city: {
        value: '',
        status: 'idle',
    },
    countryState: {
        value: '',
        status: 'idle',
    },
    zipCode: {
        value: '',
        status: 'idle',
    },
};

const shippingInfoSlice = createSlice({
    name: 'shippingInfo',
    initialState,
    reducers: {
        updateInfo: (state, action) => {
            const { key, value } = action.payload;
            state[key].value = value;
        },
        updateStatus: (state, action) => {
            const { key, status } = action.payload;
            state[key].status = status;
        },
        checkValidation: (state, action) => {
            const key = action.payload;
            if (key === 'address2') {
                return;
            }
            const value = state[key].value;
            if (isEmpty(value)) {
                state[key].status = 'empty';
                return;
            } else {
                if (key === 'email') {
                    if (!validateExpression(/\S+@\S+\.\S+/, value)) {
                        state.email.status = 'invalid';
                        return;
                    }
                }
                if (key === 'zipCode') {
                    if (!validateExpression(/^[0-9]{5}$/, value)) {
                        state.zipCode.status = 'invalid';
                        return;
                    }
                }
            }
            state[key].status = 'valid';
        },
        initShippingInfoStatus: (state, action) => {
            state.firstName.value = '';
            state.firstName.status = 'idle';
            state.lastName.value = '';
            state.lastName.status = 'idle';
            state.email.value = '';
            state.email.status = 'idle';
            state.phoneNumber.value = '';
            state.phoneNumber.status = 'idle';
            state.address1.value = '';
            state.address1.status = 'idle';
            state.address2.value = '';
            state.address2.status = 'valid';
            state.country.value = '';
            state.country.status = 'idle';
            state.city.value = '';
            state.city.status = 'idle';
            state.countryState.value = '';
            state.countryState.status = 'idle';
            state.zipCode.value = '';
            state.zipCode.status = 'idle';
        },
    },
});

export default shippingInfoSlice.reducer;

export const {
    updateInfo,
    updateStatus,
    checkValidation,
    initShippingInfoStatus,
} = shippingInfoSlice.actions;
