import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SHOPIFY_API } from 'config/common';
import { axiosGet } from 'utils/helpers';

export const fetchProductInfo = createAsyncThunk(
    'product/fetchProductInfo',
    async () => {
        const response = await axiosGet(`${SHOPIFY_API}get_products`, {
            headers: {
                'Accept-Content': '*',
                'Content-Type': 'application/json',
            },
        });
        
        return response.data.products[0];
    },
);

export const productInfoSlice = createSlice({
    name: 'productInfo',
    initialState: {
        price: null,
        id: null,
        image: null,
        sku: null,
        title: null,
        inventoryQuantity: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchProductInfo.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchProductInfo.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.id = action.payload.id;
            state.image = action.payload.image.src;
            state.price = action.payload.variants[0].price;
            state.sku = action.payload.variants[0].sku;
            state.title = action.payload.variants[0].title;
            state.inventoryQuantity =
                action.payload.variants[0].inventory_quantity;
        },
        [fetchProductInfo.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export default productInfoSlice.reducer;
