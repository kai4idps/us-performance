import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIS } from 'utils/env';
import { axiosPost } from 'utils/helpers';
import i18n from 'utils/i18n';
import {
    readStorage,
    STORAGE_KEY
} from 'utils/localStorage';

const initialState = {
    fetchingLoginRequestStatus: 'idle',
    fetchingAccountInfoStatus: 'idle',
    error: null,
    accountError: null,
    passwordError: null,
    accountInfo: {
        accountId: '',
        accountLocale: '',
        fullAccountLocale: '',
        cognitoToken: null,
        phone: '',
        email: null,
        mfa: '',
    }
};

export const fetchLoginRequest = createAsyncThunk(
    'account/fetchLoginRequest',
    async (info, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.LOG_IN, info);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

export const fetchGetAccountInfoRequest = createAsyncThunk(
    'account/fetchGetAccountInfoRequest',
    async (info, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.GET_ACCOUNT_INFO, info);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        initAccountState: (state, action) => {
            state.fetchingLoginRequestStatus = 'idle';
            state.fetchingAccountInfoStatus = 'idle';
            state.error = null;
            state.accountError = null;
            state.passwordError = null;
        },
        updateEmail: (state, action) => {
            state.accountInfo.email = action.payload;
        },
        updateAccountInfo: (state, action) => {
            state.accountInfo = action.payload;
        },
        clearAccountStateError: (state, action) => {
            state.error = null;
            state.accountError = null;
            state.passwordError = null;
        },
        clearAccountInfo: (state, action) => {
            state.accountInfo = {
                accountId: '',
                accountLocale: '',
                fullAccountLocale: '',
                cognitoToken: null,
                phone: '',
                email: null,
                mfa: '',
            };
        },
    },
    extraReducers: {
        [fetchLoginRequest.pending]: (state, action) => {
            state.fetchingLoginRequestStatus = 'loading';
        },
        [fetchLoginRequest.fulfilled]: (state, action) => {
            const {
                AccountId,
                CognitoToken,
                Locale,
                Email,
                Phone
            } = action.payload;
            let localeArray = Locale;
            if (Locale.includes('-')) {
                localeArray = Locale.split('-');
            } else if (Locale.includes('_')) {
                localeArray = Locale.split('_');
            }
            const accountLocale = localeArray[localeArray.length - 1];

            state.accountInfo = {
                accountId: AccountId,
                accountLocale: accountLocale,
                fullAccountLocale: Locale,
                cognitoToken: CognitoToken,
                phone: Phone,
                email: Email,
            };
            state.fetchingLoginRequestStatus = 'succeeded';
        },
        [fetchLoginRequest.rejected]: (state, action) => {
            const {
                Code,
                MfaAuthCodeCandidate
            } = action.payload;
            if (Code === 20001) {
                state.accountError = i18n.t('web_console:web_console.login.form.invalid_email');
            } else {
                state.passwordError = i18n.t('web_console:web_console.login.form.incorrect_password');
            }
            state.error = Code;
            state.accountInfo.mfa = MfaAuthCodeCandidate;
            state.fetchingLoginRequestStatus = 'failed';
        },
        [fetchGetAccountInfoRequest.pending]: (state, action) => {
            state.fetchingAccountInfoStatus = 'loading';
        },
        [fetchGetAccountInfoRequest.fulfilled]: (state, action) => {
            const cognitoTokenStorage = readStorage(STORAGE_KEY.COGNITO_TOKEN);
            const {
                AccountId,
                CognitoToken,
                Locale,
                Email,
                Phone
            } = action.payload;
            let localeArray = Locale;
            if (Locale.includes('-')) {
                localeArray = Locale.split('-');
            } else if (Locale.includes('_')) {
                localeArray = Locale.split('_');
            }
            const accountLocale = localeArray[localeArray.length - 1];

            state.accountInfo = {
                accountId: AccountId,
                accountLocale: accountLocale,
                fullAccountLocale: Locale,
                cognitoToken: CognitoToken || cognitoTokenStorage,
                phone: Phone,
                email: Email,
            };
            state.fetchingAccountInfoStatus = 'succeeded';
        },
        [fetchGetAccountInfoRequest.rejected]: (state, action) => {
            if (action.payload === 20001) {
                state.accountError = i18n.t('web_console:web_console.login.form.invalid_email');
            } else {
                state.passwordError = i18n.t('web_console:web_console.login.form.incorrect_password');
            }
            state.error = action.payload;
            state.fetchingAccountInfoStatus = 'failed';
        },
    },
});

export const {
    initAccountState,
    updateEmail,
    updateAccountInfo,
    clearAccountInfo,
    clearAccountStateError,
} = accountSlice.actions;

export default accountSlice.reducer;
