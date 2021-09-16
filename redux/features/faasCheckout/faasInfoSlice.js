import { createSlice } from '@reduxjs/toolkit';
import { FAAS_PLANS } from 'config/common';

const initialState = {
    index: 1,
    type: 'yearly',
    id: 'FdnSubUS1YFurboCamAndNannyBundle',
    priceText: '$9.99',
    price: '99',
};

export const faasInfoSlice = createSlice({
    name: 'faasInfo',
    initialState,
    reducers: {
        updateInfo: (state, action) => {
            const planTypeIndex = action.payload;
            state.index = planTypeIndex;
            state.type = FAAS_PLANS.US[planTypeIndex].type;
            state.id = FAAS_PLANS.US[planTypeIndex].id;
            state.priceText = FAAS_PLANS.US[planTypeIndex].priceText;
            state.price = FAAS_PLANS.US[planTypeIndex].price;
        },
    },
});

export const { updateInfo } = faasInfoSlice.actions;

export default faasInfoSlice.reducer;
