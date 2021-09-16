import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    systemErrCode: null
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        updateSystemErrCodeState: (state, action) => {
            state.systemErrCode = action.payload;
        },
    },
});

export const {
    updateSystemErrCodeState
} = modalSlice.actions;

export default modalSlice.reducer;
