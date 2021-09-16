import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIS } from 'utils/env';
import { axiosPost } from 'utils/helpers';

const initialState = {
    fetchingBindingDeviceListStatus: 'idle',
    error: null,
    furboDeviceId: null,
    deviceList: []
};

export const fetchBindingDeviceListRequest = createAsyncThunk(
    'device/fetchBindingDeviceListRequest',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosPost(APIS.GET_BINDING_DEVICES, data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

const sortDevice = (items) => {
    const sortedItem = items;
    const orders = ['FB', 'MC'];
    let order1 = -1;
    let order2 = -1;
    let createTime1 = 0;
    let createTime2 = 0;
    sortedItem.sort((itemA, itemB) => {
        order1 = orders.indexOf(itemA.ProductId.substring(0, 2));
        order2 = orders.indexOf(itemB.ProductId.substring(0, 2));
        createTime1 = new Date(itemA.BindingCreatedTime);
        createTime2 = new Date(itemB.BindingCreatedTime);
        if (order1 > order2) {
            return 1;
        } else if (order1 < order2) {
            return -1;
        } else if (order1 === order2 && createTime1 > createTime2) {
            return 1;
        } else if (order1 === order2 && createTime1 < createTime2) {
            return -1;
        } else {
            return 0;
        }
    });

    return sortedItem;
};

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        initDeviceState: (state, action) => {
            state.fetchingBindingDeviceListStatus = 'idle';
        },
    },
    extraReducers: {
        [fetchBindingDeviceListRequest.pending]: (state, action) => {
            state.fetchingBindingDeviceListStatus = 'loading';
        },
        [fetchBindingDeviceListRequest.fulfilled]: (state, action) => {
            const {
                DeviceList
            } = action.payload;
            state.furboDeviceId = DeviceList?.[0]?.Id;
            state.deviceList = sortDevice(DeviceList);
            state.fetchingBindingDeviceListStatus = 'succeeded';
        },
        [fetchBindingDeviceListRequest.rejected]: (state, action) => {
            state.error = action.payload;
            state.fetchingBindingDeviceListStatus = 'failed';
        },
    }
});

export const {
    initDeviceState
} = deviceSlice.actions;

export default deviceSlice.reducer;
