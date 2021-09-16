import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIS } from 'utils/env';
import { axiosPost } from 'utils/helpers';

const initialState = {
    status: 'idle',
    error: null,
    orderInfo: {
        orderId: null,
        orderName: null,
        orderStatusUrl: null,
    },
};

export const handleFaasCheckout = createAsyncThunk(
    'faasCheckout/handleFaasCheckout',
    async (info) => {
        const response = await axiosPost(APIS.ADD_HW_BUNDLE, info);
        return response.data;
    },
);

const paymentInfoSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        initPaymentStatus: (state, action) => {
            state.status = 'idle';
            state.error = null;
            state.orderInfo.orderId = null;
            state.orderInfo.orderName = null;
            state.orderInfo.orderStatusUrl = null;
        },
    },
    extraReducers: {
        [handleFaasCheckout.pending]: (state, action) => {
            state.status = 'loading';
        },
        [handleFaasCheckout.fulfilled]: (state, action) => {
            state.orderInfo.orderId = action.payload.OrderId;
            state.orderInfo.orderName = action.payload.OrderName;
            state.orderInfo.orderStatusUrl = action.payload.OrderStatusUrl;
            state.status = 'succeeded';
        },
        [handleFaasCheckout.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { initPaymentStatus } = paymentInfoSlice.actions;

export default paymentInfoSlice.reducer;
