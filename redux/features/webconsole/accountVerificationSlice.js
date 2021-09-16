import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIS } from 'utils/env';
import { axiosPost } from 'utils/helpers';

const initialState = {
    fetchingSendEmailStatus: 'idle',
    fetchingVerifyTokenStatus: 'idle',
    fetchingResendMailStatus: 'idle',
    info: {},
    sendMailError: null,
    error: null,
    resendMailError: null,
};

export const handleSendEmailRequest = createAsyncThunk(
    'webconsole/handleSendEmailRequest',
    async (info, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.MFA_SEND_EMAIL, info);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

export const handleVerifyTokenRequest = createAsyncThunk(
    'webconsole/handleVerifyTokenRequest',
    async (info, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.MFA_VERIFY, info);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

export const handleResendMailRequest = createAsyncThunk(
    'webconsole/handleResendMailRequest',
    async (info, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.MFA_RESEND_EMAIL, info);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

const accountVerificationSlice = createSlice({
    name: 'accountVerification',
    initialState,
    reducers: {
        initAccountVerificationStatus: (state, action) => {
            state.fetchingSendEmailStatus = 'idle';
            state.fetchingVerifyTokenStatus = 'idle';
            state.fetchingResendMailStatus = 'idle';
            state.fetchingResendMailStatus = 'idle';
            state.fetchingResendMailStatus = 'idle';
            state.sendMailError = null;
            state.error = null;
            state.resendMailError = null;
        },
    },
    extraReducers: {
        [handleSendEmailRequest.pending]: (state, action) => {
            state.fetchingSendEmailStatus = 'loading';
        },
        [handleSendEmailRequest.fulfilled]: (state, action) => {
            state.fetchingSendEmailStatus = 'succeeded';
        },
        [handleSendEmailRequest.rejected]: (state, action) => {
            state.fetchingSendEmailStatus = 'failed';
            state.sendMailError = action.payload?.Code;
        },
        [handleVerifyTokenRequest.pending]: (state, action) => {
            state.fetchingVerifyTokenStatus = 'loading';
        },
        [handleVerifyTokenRequest.fulfilled]: (state, action) => {
            state.fetchingVerifyTokenStatus = 'succeeded';
            state.info = action.payload;
        },
        [handleVerifyTokenRequest.rejected]: (state, action) => {
            state.fetchingVerifyTokenStatus = 'failed';
            state.error = action.payload?.Code;
        },
        [handleResendMailRequest.pending]: (state, action) => {
            state.fetchingResendMailStatus = 'loading';
        },
        [handleResendMailRequest.fulfilled]: (state, action) => {
            state.fetchingResendMailStatus = 'succeeded';
        },
        [handleResendMailRequest.rejected]: (state, action) => {
            state.fetchingResendMailStatus = 'failed';
            state.resendMailError = action.payload?.Code;
        },
    },
});

export const {
    initAccountVerificationStatus,
} = accountVerificationSlice.actions;

export default accountVerificationSlice.reducer;
