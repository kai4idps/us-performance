import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SHOPIFY_API } from '@/config/common';
import { axiosGet } from '@/utils/helpers';
import { blogId } from './prefetchData';

const initialState = {
    articles: [],
    topic: 'all',
    status: 'idle',
    error: null,
};

export const fetchAllArticles = createAsyncThunk(
    'articles/fetchAllArticles',
    async () => {
        const response = await axiosGet(`${SHOPIFY_API}batch_get_articles`, {
            headers: {
                'Accept-Content': '*',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    },
);

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        updateTopic: (state, action) => {
            state.topic = action.payload;
        },
    },
    extraReducers: {
        [fetchAllArticles.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchAllArticles.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.articles = action.payload.articles;
        },
        [fetchAllArticles.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export default articlesSlice.reducer;

export const { updateTopic } = articlesSlice.actions;

export const selectArticlesByBlogId = (state, key) => {
    if (key === 'all') {
        return state.articles.articles;
    }
    return state.articles.articles.filter(
        (article) => article.blog_id === blogId[key].id,
    );
};

export const selectArticleById = (state, id) =>
    state.articles.articles.filter((article) => article.blog_id === id);
