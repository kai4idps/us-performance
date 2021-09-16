import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIS } from 'utils/env';
import { axiosPost } from 'utils/helpers';

const initialState = {
    price: null,
    currency: null,
    extendedDays: null,
    tax: null,
    taxRate: null,
    info: null,
    status: 'idle',
    error: null,
};

export const fetchTaxInfo = createAsyncThunk(
    'faasCheckout/fetchTaxInfo',
    async (info) => {
        const response = await axiosPost(APIS.GET_TAX, info);
        return { data: response.data, info };
    },
);

const taxInfoSlice = createSlice({
    name: 'taxInfo',
    initialState,
    reducers: {
        initTaxInfoStatus: (state, action) => {
            state.price = null;
            state.currency = null;
            state.extendedDays = null;
            state.tax = null;
            state.taxRate = null;
            state.info = null;
            state.status = 'idle';
            state.error = null;
        },
        setTaxInfoStatusIdle: (state, action) => {
            state.status = 'idle';
        },
        setTaxInfoStatusSucceeded: (state, action) => {
            state.status = 'succeeded';
        },
    },
    extraReducers: {
        [fetchTaxInfo.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchTaxInfo.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            const {
                Amount,
                Currency,
                ExtendDays,
                Tax,
                TaxRate,
            } = action.payload.data;
            state.info = action.payload.info;
            state.price = Amount;
            state.currency = Currency;
            state.extendedDays = ExtendDays;
            state.tax = Tax;
            state.taxRate = TaxRate;
        },
        [fetchTaxInfo.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});
export const {
    initTaxInfoStatus,
    setTaxInfoStatusIdle,
    setTaxInfoStatusSucceeded,
} = taxInfoSlice.actions;

export default taxInfoSlice.reducer;
