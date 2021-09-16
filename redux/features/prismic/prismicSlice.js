import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from 'config/prismic';

const initialState = {
    campaign: null,
    status: {
        campaign: 'idle',
        homepage: 'idle',
    },
};

export const fetchCampaignData = createAsyncThunk(
    'prismic/fetchCampaignData',
    async (_, { getState }) => {
        const { language } = getState();
        const data = await client.getSingle('campaign', {
            lang: language.language,
            fetchLinks: [
                'shop_button.shop_button_text',
                'video_button.watch_video_text',
                'video_button.video_link',
            ],
        });
        return data.data;
    },
);

export const fetchHomepageData = createAsyncThunk(
    'prismic/fetchHomepageData',
    async (_, { getState }) => {
        const { language } = getState();
        const data = await client.getSingle('homepage_section', {
            lang: language.language,
            fetchLinks: [
                'grid_element.content',
                'learn_button.learn_button_text',
                'learn_button.color',
            ],
        });
        return data.data.body;
    },
);

const prismicSlice = createSlice({
    name: 'prismic',
    initialState,
    extraReducers: {
        [fetchCampaignData.pending]: (state, action) => {
            state.status.campaign = 'loading';
        },
        [fetchCampaignData.fulfilled]: (state, action) => {
            state.campaign = action.payload;
            state.status.campaign = 'succeeded';
        },
        [fetchCampaignData.rejected]: (state, action) => {
            state.status.campaign = 'failed';
            state.error = action.payload;
        },
        [fetchHomepageData.pending]: (state, action) => {
            state.status.homepage = 'loading';
        },
        [fetchHomepageData.fulfilled]: (state, action) => {
            state.homepage = action.payload;
            state.status.homepage = 'succeeded';
        },
        [fetchHomepageData.rejected]: (state, action) => {
            state.status.homepage = 'failed';
            state.error = action.payload;
        },
    },
});

export default prismicSlice.reducer;
