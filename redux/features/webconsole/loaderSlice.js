import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPageLoaderShown: false
};

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        updatePageLoaderState: (state, action) => {
            state.isPageLoaderShown = action.payload;
        },
    },
});

export const {
    updatePageLoaderState
} = loaderSlice.actions;

export default loaderSlice.reducer;
