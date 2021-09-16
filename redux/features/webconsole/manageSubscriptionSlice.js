import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIS } from 'utils/env';
import { axiosPost } from 'utils/helpers';

const initialState = {
    fetchingCancelSubscriptionStatus: 'idle',
    fetchingFetchResumeCancelSubscriptionStatus: 'idle',
    cancelSubscriptionError: null,
    resumeCancelSubscriptionError: null,
};

export const handleFetchCancelSubscriptionRequest = createAsyncThunk(
    'webconsole/handleFetchCancelSubscriptionRequest',
    async (info, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.CANCEL_SUBSCRIPTION, info);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

export const handleFetchResumeCancelSubscriptionRequest = createAsyncThunk(
    'webconsole/handleFetchResumeCancelSubscriptionRequest',
    async (info, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.RESUME_CANCEL_SUBSCRIPTION, info);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

const manageSubscriptionSlice = createSlice({
    name: 'manageSubscription',
    initialState,
    reducers: {
        initManageSubscriptionStatus: (state, action) => {
            state.fetchingCancelSubscriptionStatus = 'idle';
            state.fetchingFetchResumeCancelSubscriptionStatus = 'idle';
            state.cancelSubscriptionError = null;
            state.resumeCancelSubscriptionError = null;
        },
    },
    extraReducers: {
        [handleFetchCancelSubscriptionRequest.pending]: (state, action) => {
            state.fetchingCancelSubscriptionStatus = 'loading';
        },
        [handleFetchCancelSubscriptionRequest.fulfilled]: (state, action) => {
            state.fetchingCancelSubscriptionStatus = 'succeeded';
        },
        [handleFetchCancelSubscriptionRequest.rejected]: (state, action) => {
            state.fetchingCancelSubscriptionStatus = 'failed';
            state.cancelSubscriptionError = action.payload?.Code;
        },
        [handleFetchResumeCancelSubscriptionRequest.pending]: (state, action) => {
            state.fetchingFetchResumeCancelSubscriptionStatus = 'loading';
        },
        [handleFetchResumeCancelSubscriptionRequest.fulfilled]: (state, action) => {
            state.fetchingFetchResumeCancelSubscriptionStatus = 'succeeded';
        },
        [handleFetchResumeCancelSubscriptionRequest.rejected]: (state, action) => {
            state.fetchingFetchResumeCancelSubscriptionStatus = 'failed';
            state.resumeCancelSubscriptionError = action.payload?.Code;
        },
    },
});

export const {
    initManageSubscriptionStatus,
} = manageSubscriptionSlice.actions;

export default manageSubscriptionSlice.reducer;
