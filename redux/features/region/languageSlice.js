import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        code: '',
        language: '',
    },
    reducers: {
        updateLanguage: (state, action) => {
            const { code, language } = action.payload;
            state.code = code;
            state.language = language;
        },
        fallbackLanguage: (state) => {
            state.code = 'us';
            state.language = 'en-US';
        },
    },
});

export const { updateLanguage, fallbackLanguage } = languageSlice.actions;

export default languageSlice.reducer;
