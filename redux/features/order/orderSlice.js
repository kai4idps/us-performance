import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ORDER_STATUS_API } from 'config/common';
import { axiosPost } from 'utils/helpers';

const initialState = {
    createdAt: null,
    totalPrice: null,
    subtotalPrice: null,
    totalTax: null,
    currency: null,
    fulfillmentStatus: null,
    name: null,
    id: null,
    itemList: null,
    shippingList: null,
    billingInfo: null,
    shippingInfo: null,
    discountInfo: null,
    status: 'idle',
    error: null,
};

export const fetchOrder = createAsyncThunk(
    'order/fetchOrder',
    async (input, { getState }) => {
        const { email, number } = input;
        const response = await axiosPost(ORDER_STATUS_API, {
            country: getState().region.code,
            action: 'order_lookup',
            order_name: number,
            email: email,
        });
        return response.data;
    },
);

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        initOrderStatus: (state, action) => {
            state.createdAt = null;
            state.totalPrice = null;
            state.fulfillmentStatus = null;
            state.name = null;
            state.id = null;
            state.itemList = null;
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: {
        [fetchOrder.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchOrder.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.createdAt = action.payload.created_at;
            state.currency = action.payload.currency;
            state.id = action.payload.order_number;
            state.name = `${action.payload.shipping_address.first_name} ${action.payload.shipping_address.last_name}`;
            state.totalPrice = action.payload.total_price;
            state.subtotalPrice = action.payload.subtotal_price;
            state.totalTax = action.payload.total_tax;
            state.fulfillmentStatus = action.payload.fulfillment_status;
            state.billingInfo = action.payload.billing_address;
            state.shippingInfo = action.payload.shipping_address;
            state.discountInfo = action.payload.discount_code;
            state.itemList = action.payload.line_items;
            state.shippingList = action.payload.shipping_lines[0];
        },
        [fetchOrder.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export const { initOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
