import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIS } from 'utils/env';
import { axiosPost } from 'utils/helpers';

const initialState = {
    fetchGetCardInfoStatus: 'idle',
    brand: null,
    country: '',
    zipcode: '',
    currentCardNumber: '',
    currentCardExpiry: '',
    fetchUpdateCardInfoStatus: 'idle',
    error: null,
};

export const fetchGetCardInfoRequest = createAsyncThunk(
    'device/fetchGetCardInfoRequest',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.GET_CARD_INFO, data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

export const fetchUpdateCardInfoRequest = createAsyncThunk(
    'device/fetchUpdateCardInfoRequest',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.UPDATE_CARD_INFO, data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        initCardStatus: (state, action) => {
            state.fetchGetCardInfoStatus = 'idle';
            state.brand =  null;
            state.country = '';
            state.zipcode = '';
            state.currentCardNumber = '';
            state.currentCardExpiry = '';
            state.fetchUpdateCardInfoStatus = 'idle';
            state.error = null;
        },
        setFetchUpdateCardInfoStatusIdle: (state, action) => {
            state.fetchUpdateCardInfoStatus = 'idle';
        },
        clearError: (state, action) => {
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: {
        [fetchGetCardInfoRequest.pending]: (state, action) => {
            state.fetchGetCardInfoStatus = 'loading';
        },
        [fetchGetCardInfoRequest.fulfilled]: (state, action) => {
            const card = action.payload?.Cards?.[0] || {};
            const {
                AddressCountry,
                AddressZip,
                Last4,
                ExpMonth,
                ExpYear,
                Brand
            } = card;
            state.brand = Brand;
            state.country = AddressCountry || '';
            state.zipcode = AddressZip || '';
            state.currentCardNumber = Last4 ? `◦◦◦◦ ◦◦◦◦ ◦◦◦◦ ${Last4}` : '';
            state.currentCardExpiry = (ExpMonth && ExpYear) ? `${`0${ExpMonth}`.slice(-2)} / ${`${ExpYear}`.slice(-2)}` : '';
            state.fetchGetCardInfoStatus = 'succeeded';
        },
        [fetchGetCardInfoRequest.rejected]: (state, action) => {
            state.fetchGetCardInfoStatus = 'failed';
        },
        [fetchUpdateCardInfoRequest.pending]: (state, action) => {
            state.fetchUpdateCardInfoStatus = 'loading';
        },
        [fetchUpdateCardInfoRequest.fulfilled]: (state, action) => {
            state.fetchUpdateCardInfoStatus = 'succeeded';
        },
        [fetchUpdateCardInfoRequest.rejected]: (state, action) => {
            const {
                Code,
            } = action.payload;
            state.error = Code;
            state.fetchUpdateCardInfoStatus = 'failed';
        },
    }
});

export const {
    setFetchUpdateCardInfoStatusIdle,
    initCardStatus,
    clearError,
    setError,
} = cardSlice.actions;

export default cardSlice.reducer;
