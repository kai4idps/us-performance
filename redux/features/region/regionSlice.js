import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LOCALE_API } from '@/config/common';
import { REGION_INFO } from '@/config/navigation';
import FLAG_US from '@/assets/images/general/flags/us.svg';
import { axiosGet } from '@/utils/helpers';

const initialState = {
    country: null,
    code: null,
    href: '',
    isRedirect: false,
    image: null,
    status: 'idle',
    error: null,
};

export const fetchRegion = createAsyncThunk('region/fetchRegion', async () => {
    const response = await axiosGet(LOCALE_API, { headers: {} });
    const code = response.data.Country === 'GB' ? 'UK' : response.data.Country;
    const info = REGION_INFO?.[code] || REGION_INFO.US;
    return info;
});

export const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        updateRegion: (state, action) => {
            const { country, code, href, isRedirect, image } = action.payload;
            state.country = country;
            state.code = code;
            state.href = href;
            state.isRedirect = isRedirect;
            state.image = image;
        },
        fallbackRegion: (state) => {
            state.country = 'United State';
            state.code = 'us';
            state.href = '';
            state.isRedirect = false;
            state.image = FLAG_US;
        },
    },
    extraReducers: {
        [fetchRegion.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchRegion.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            const { country, code, href, isRedirect, image } = action.payload;
            state.country = country;
            state.code = code;
            state.href = href;
            state.isRedirect = isRedirect;
            state.image = image;
        },
        [fetchRegion.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { updateRegion, fallbackRegion } = regionSlice.actions;

export default regionSlice.reducer;
