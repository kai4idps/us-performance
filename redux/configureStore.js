import { configureStore } from '@reduxjs/toolkit';
import regionReducer from './features/region/regionSlice';
import languageReducer from './features/region/languageSlice';
// import prismicReducer from './features/prismic/prismicSlice';
// import faasInfoReducer from './features/faasCheckout/faasInfoSlice';
// import postsReducer from './features/posts/postsSlice';
import articlesReducer from './features/articles/articlesSlice';
// import shippingInfoReducer from './features/faasCheckout/shippingInfoSlice';
// import paymentInfoReducer from './features/faasCheckout/paymentInfoSlice';
// import taxInfoReducer from './features/faasCheckout/taxInfoSlice';
// import ProductInfoReducer from './features/product/productInfoSlice';
// import orderReducer from './features/order/orderSlice';
// import AccountReducer from './features/webconsole/accountSlice';
// import LoaderReducer from './features/webconsole/loaderSlice';
// import DeviceReducer from './features/webconsole/deviceSlice';
// import LicenseReducer from './features/webconsole/licenseSlice';
// import webConsolePaymentInfoReducer from './features/webconsole/paymentInfoSlice';
// import webConsoleTaxInfoReducer from './features/webconsole/taxInfoSlice';
// import accountVerificationReducer from './features/webconsole/accountVerificationSlice';
// import manageSubscriptionSliceReducer from './features/webconsole/manageSubscriptionSlice';
// import modalReducer from './features/webconsole/modalSlice';
// import cardReducer from './features/webconsole/cardSlice';

const preloadState = {};

export default configureStore({
    reducer: {
        // faasInfo: faasInfoReducer,
        // posts: postsReducer,
        region: regionReducer,
        language: languageReducer,
        // prismic: prismicReducer,
        articles: articlesReducer,
        // shippingInfo: shippingInfoReducer,
        // paymentInfo: paymentInfoReducer,
        // taxInfo: taxInfoReducer,
        // productInfo: ProductInfoReducer,
        // order: orderReducer,
        // account: AccountReducer,
        // loader: LoaderReducer,
        // device: DeviceReducer,
        // license: LicenseReducer,
        // webConsolePayment: webConsolePaymentInfoReducer,
        // webConsoleTaxInfo: webConsoleTaxInfoReducer,
        // accountVerification: accountVerificationReducer,
        // manageSubscription: manageSubscriptionSliceReducer,
        // modal: modalReducer,
        // card: cardReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    preloadState,
});
