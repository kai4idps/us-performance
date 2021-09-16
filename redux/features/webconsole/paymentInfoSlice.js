import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIS } from 'utils/env';
import { axiosPost } from 'utils/helpers';

const initialState = {
    status: 'idle',
    error: null,
};

export const handleFDNCheckout = createAsyncThunk(
    'device/handleSubscribeFDN',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.ADD_SUBSCRIPTION, data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

const paymentInfoSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        initPaymentStatus: (state, action) => {
            state.status = 'idle';
            state.error = null;
        },
        clearError: (state, action) => {
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: {
        [handleFDNCheckout.pending]: (state, action) => {
            state.status = 'loading';
        },
        [handleFDNCheckout.fulfilled]: (state, action) => {
            state.status = 'succeeded';
        },
        [handleFDNCheckout.rejected]: (state, action) => {
            const {
                Code,
            } = action.payload;
            state.status = 'failed';
            state.error = Code;
        },
    },
});

export const {
    initPaymentStatus,
    clearError,
    setError,
} = paymentInfoSlice.actions;

export default paymentInfoSlice.reducer;
