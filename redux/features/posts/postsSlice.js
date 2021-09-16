import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    blogType: null,
    blogTitle: null,
    blogId: null,
    articleId: null,
    meta: {
        title: null,
        description: null,
    },
    content: {
        title: null,
        image: null,
        body: null,
    },
    status: 'idle',
    error: null,
};

export const fetchPost = createAsyncThunk(
    'posts/fetchPost',
    (input, { getState }) => {
        const content = getState().articles.articles.find(
            (article) => article.id === getState().posts.articleId,
        );
        return content;
    },
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        updatePostInfo: (state, action) => {
            const { key, title, blogId, articleId } = action.payload;
            state.blogType = key;
            state.blogTitle = title;
            state.blogId = blogId;
            state.articleId = articleId;
        },
        updateBlogId: (state, action) => {
            state.blogId = action.payload;
        },
        updateBlogType: (state, action) => {
            state.blogType = action.payload;
        },
        updateArticleId: (state, action) => {
            state.articleId = action.payload;
        },
        initPostInfo: (state, action) => {
            state.blogType = null;
            state.blogTitle = null;
            state.blogId = null;
            state.articleId = null;
            state.meta.title = null;
            state.meta.description = null;
            state.content.title = null;
            state.content.image = null;
            state.content.body = null;
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: {
        [fetchPost.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchPost.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            const result = action.payload;
            state.meta.title = result.title_tag;
            state.meta.description = result.description_tag;
            state.content.title = result.title;
            state.content.image = result.image?.src;
            state.content.body = result.body_html;
        },
        [fetchPost.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const {
    updatePostInfo,
    updateBlogType,
    updateBlogId,
    updateArticleId,
    initPostInfo,
} = postsSlice.actions;

export default postsSlice.reducer;
