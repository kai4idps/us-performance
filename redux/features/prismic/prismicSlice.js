import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "config/prismic";
import { LCP_IMAGE_API } from "@/config/common";
import { axiosGet } from "@/utils/helpers";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  campaign: null,
  lcpImage: null,
  homepage: null,
  productPage: null,
  fdnPage: null,
  ffgPage: null,
  savingLivesPage: null,
  dfdPage: null,
  status: {
    campaign: "idle",
    lcpImage: "idle",
    homepage: "idle",
    productPage: "idle",
    fdnPage: "idle",
    ffgPage: "idle",
    savingLivesPage: "idle",
    dfdPage: "idle",
  },
  error: {
    campaign: null,
    lcpImage: null,
    homepage: null,
    productPage: null,
    fdnPage: null,
    ffgPage: null,
    savingLivesPage: null,
    dfdPage: null,
  },
};

export const fetchCampaignData = createAsyncThunk(
  "prismic/fetchCampaignData",
  async (_, { getState }) => {
    const { language } = getState();
    const data = await client.getSingle("campaign", {
      lang: "en-CA",
      fetchLinks: [
        "shop_button.shop_button_text",
        "shop_button.center",
        "video_button.watch_video_text",
        "video_button.center",
        "video_button.video_link",
      ],
    });
    return data.data;
  },
);

export const fetchLcpImageData = createAsyncThunk(
  "prismic/fetchLcpImageData",
  async () => {
    const data = await axiosGet(LCP_IMAGE_API, {
      headers: {
        "Accept-Content": "*",
        "Content-Type": "application/json",
      },
    });
    return data.data;
  },
);

export const fetchHomepageData = createAsyncThunk(
  "prismic/fetchHomepageData",
  async (_, { getState }) => {
    const { language } = getState();
    const data = await client.getSingle("homepage_section", {
      lang: "en-CA",
      fetchLinks: [
        "grid_element.content",
        "shop_button.shop_button_text",
        "shop_button.center",
        "learn_button.learn_button_text",
        "learn_button.color",
        "learn_button.link",
      ],
    });
    return data.data.body;
  },
);

export const fetchProductPageData = createAsyncThunk(
  "prismic/fetchProductPageData",
  async (_, { getState }) => {
    const { language } = getState();
    const data = await client.getSingle("product_page_section", {
      lang: "en-CA",
      fetchLinks: [
        "product_button.product_name",
        "product_button.button_text",
        "product_button.product_info",
        "product_button.product_type",
        "grid_element.content",
        "shop_button.shop_button_text",
        "shop_button.center",
        "learn_button.learn_button_text",
        "learn_button.color",
        "learn_button.link",
      ],
    });
    return data.data;
  },
);

export const fetchFdnPageData = createAsyncThunk(
  "prismic/fetchFdnPageData",
  async (_, { getState }) => {
    const { language } = getState();
    const data = await client.getSingle("fdn_page_section", {
      lang: "en-CA",
      fetchLinks: [
        "grid_element.content",
        "video_button.watch_video_text",
        "video_button.center",
        "video_button.video_link",
        "shop_button.shop_button_text",
        "shop_button.center",
        "learn_button.learn_button_text",
        "learn_button.color",
        "learn_button.link",
        "sign_in_button.sign_in_button_text",
        "sign_in_button.center",
      ],
    });
    return data.data;
  },
);

export const fetchFfgPageData = createAsyncThunk(
  "prismic/fetchFfgPageData",
  async (_, { getState }) => {
    const { language } = getState();
    const data = await client.getSingle("ffg_page_section", {
      lang: "en-CA",
      fetchLinks: [
        "learn_button.learn_button_text",
        "learn_button.color",
        "learn_button.link",
        "shop_button.shop_button_text",
        "shop_button.center",
      ],
    });
    return data.data;
  },
);

export const fetchSavingLivesPageData = createAsyncThunk(
  "prismic/fetchSavingLivesPageData",
  async (_, { getState }) => {
    const { language } = getState();
    const data = await client.getSingle("saving_lives_page_section", {
      lang: "en-CA",
      fetchLinks: [
        "learn_button.learn_button_text",
        "learn_button.color",
        "learn_button.link",
        "shop_button.shop_button_text",
        "shop_button.center",
      ],
    });
    return data.data;
  },
);

export const fetchDfdPageData = createAsyncThunk(
  "prismic/fetchDfdPageData",
  async (_, { getState }) => {
    const { language } = getState();
    const data = await client.getSingle("dfd_page_section", {
      lang: "en-CA",
      fetchLinks: [
        "grid_element.content",
        "shop_button.shop_button_text",
        "shop_button.center",
      ],
    });
    return data.data;
  },
);

const prismicSlice = createSlice({
  name: "prismic",
  initialState,
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.prismic,
      };
    },
    [fetchCampaignData.pending]: (state, action) => {
      state.status.campaign = "loading";
    },
    [fetchCampaignData.fulfilled]: (state, action) => {
      state.campaign = action.payload;
      state.status.campaign = "succeeded";
    },
    [fetchCampaignData.rejected]: (state, action) => {
      state.status.campaign = "failed";
      state.error.campaign = action.payload;
    },
    [fetchLcpImageData.pending]: (state, action) => {
      state.status.lcpImage = "loading";
    },
    [fetchLcpImageData.fulfilled]: (state, action) => {
      state.lcpImage = action.payload;
      state.status.lcpImage = "succeeded";
    },
    [fetchLcpImageData.rejected]: (state, action) => {
      state.status.lcpImage = "failed";
      state.error.lcpImage = action.payload;
    },
    [fetchHomepageData.pending]: (state, action) => {
      state.status.homepage = "loading";
    },
    [fetchHomepageData.fulfilled]: (state, action) => {
      state.homepage = action.payload;
      state.status.homepage = "succeeded";
    },
    [fetchHomepageData.rejected]: (state, action) => {
      state.status.homepage = "failed";
      state.error.homepage = action.payload;
    },
    [fetchProductPageData.pending]: (state, action) => {
      state.status.productPage = "loading";
    },
    [fetchProductPageData.fulfilled]: (state, action) => {
      state.productPage = action.payload;
      state.status.productPage = "succeeded";
    },
    [fetchProductPageData.rejected]: (state, action) => {
      state.status.productPage = "failed";
      state.error.productPage = action.payload;
    },
    [fetchFdnPageData.pending]: (state, action) => {
      state.status.fdnPage = "loading";
    },
    [fetchFdnPageData.fulfilled]: (state, action) => {
      state.fdnPage = action.payload;
      state.status.fdnPage = "succeeded";
    },
    [fetchFdnPageData.rejected]: (state, action) => {
      state.status.fdnPage = "failed";
      state.error.fdnPage = action.payload;
    },
    [fetchFfgPageData.pending]: (state, action) => {
      state.status.ffgPage = "loading";
    },
    [fetchFfgPageData.fulfilled]: (state, action) => {
      state.ffgPage = action.payload;
      state.status.ffgPage = "succeeded";
    },
    [fetchFfgPageData.rejected]: (state, action) => {
      state.status.ffgPage = "failed";
      state.error.ffgPage = action.payload;
    },
    [fetchSavingLivesPageData.pending]: (state, action) => {
      state.status.savingLivesPage = "loading";
    },
    [fetchSavingLivesPageData.fulfilled]: (state, action) => {
      state.savingLivesPage = action.payload;
      state.status.savingLivesPage = "succeeded";
    },
    [fetchSavingLivesPageData.rejected]: (state, action) => {
      state.status.savingLivesPage = "failed";
      state.error.savingLivesPage = action.payload;
    },
    [fetchDfdPageData.pending]: (state, action) => {
      state.status.dfdPage = "loading";
    },
    [fetchDfdPageData.fulfilled]: (state, action) => {
      state.dfdPage = action.payload;
      state.status.dfdPage = "succeeded";
    },
    [fetchDfdPageData.rejected]: (state, action) => {
      state.status.dfdPage = "failed";
      state.error.dfdPage = action.payload;
    },
  },
});

export default prismicSlice.reducer;
