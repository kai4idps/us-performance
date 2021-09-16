import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import YouTube from '@material-ui/icons/YouTube';
import FURBO_DOG_CAMERA_ICON from '@/assets/images/general/furbo-dog-camera-logo.png';
import FURBO_DOG_NANNY_ICON from '@/assets/images/general/furbo-dog-nanny-logo.png';
// import Image from 'components/Image';
// import Home from 'containers/ca/Home';
// import BrandStory from 'containers/us/BrandStory';
// import DesignedForDogs from 'containers/us/DesignedForDogs';
// import Fdn from 'containers/ca/Fdn';
// import Blogs from 'containers/ca/Blogs';
// import PressMention from 'containers/ca/PressMention';
// import Product from 'containers/ca/Product';
// import SavingLives from 'containers/ca/SavingLives';
// import FurboForGood from 'containers/ca/FurboForGood';
// import FaasCheckout from 'containers/ca/FaasCheckout';
// import Cart from 'containers/ca/Cart';
// import OrderStatus from 'containers/ca/OrderStatus';

// export const PAGE_KEYS = {
//     HOME: 'HOME',
//     PRODUCTS: 'PRODUCTS',
//     FDN: 'FDN',
//     SAVING_LIVES: 'SAVING_LIVES',
//     FURBO_FOR_GOOD: 'FURBO_FOR_GOOD',
//     DESIGNED_FOR_DOGS: 'DESIGNED_FOR_DOGS',
//     BLOGS: 'BLOGS',
//     PRESSES: 'PRESSES',
//     OUR_STORIES: 'OUR_STORIES',
//     FAAS_CHECKOUT: 'FAAS_CHECKOUT',
//     ORDER_STATUS: 'ORDER_STATUS',
//     CART: 'CART',
// };

// export const PAGE_PATHS = {
//     [PAGE_KEYS.HOME]: '/ca',
//     [PAGE_KEYS.PRODUCTS]: '/ca/products/furbo-dog-camera',
//     [PAGE_KEYS.FDN]: '/ca/products/furbo-dog-nanny',
//     [PAGE_KEYS.SAVING_LIVES]: '/ca/pages/saving-lives',
//     [PAGE_KEYS.FURBO_FOR_GOOD]: '/ca/pages/furbo-for-good',
//     [PAGE_KEYS.DESIGNED_FOR_DOGS]: '/ca/pages/designed-for-dogs',
//     [PAGE_KEYS.BLOGS]: '/ca/pages/blogs',
//     [PAGE_KEYS.PRESSES]: '/ca/pages/press-mention',
//     [PAGE_KEYS.OUR_STORIES]: '/ca/pages/brand-story',
//     [PAGE_KEYS.FAAS_CHECKOUT]: '/ca/pages/faas-checkout',
//     [PAGE_KEYS.ORDER_STATUS]: '/ca/pages/order-status',
//     [PAGE_KEYS.CART]: '/ca/pages/cart',
// };

// const routes = [
//     {
//         title:
//             'Furbo Dog Camera | Furbo Dog Camera - Treat-tossing Pet Camera with HD',
//         metaTitle:
//             'Furbo Dog Camera | Furbo Dog Camera - Treat-tossing Pet Camera with HD',
//         metaDescription:
//             'Furbo Dog Camera lets you see, talk and toss treats to your dog when you’re not home. It’s the #1 best-selling interactive pet camera. Furbo alerts you when your dog barks by sending you Bark Alerts on your phone. Over 5,000 vets and professional dog trainers recommend using Furbo to ease separation anxiety in dogs.',
//         path: PAGE_PATHS[PAGE_KEYS.HOME],
//         key: PAGE_KEYS.HOME,
//         component: Home,
//     },
//     {
//         title:
//             'Furbo Dog Camera | Treat-Tossing Dog Camera & 2 Way Audio | Furbo Dog Camera',
//         metaTitle:
//             'Furbo Dog Camera | Treat-Tossing Dog Camera & 2 Way Audio | Furbo Dog Camera',
//         metaDescription:
//             'Furbo is an interactive dog camera with a connected app that lets you see, talk, and even give treats to your dog when you’re away. Get free shipping!',
//         path: PAGE_PATHS[PAGE_KEYS.PRODUCTS],
//         key: PAGE_KEYS.PRODUCTS,
//         component: Product,
//     },
//     {
//         title: 'Furbo Dog Nanny | Furbo Dog Camera',
//         metaTitle: 'Furbo Dog Nanny | Furbo Dog Camera',
//         metaDescription: '',
//         path: PAGE_PATHS[PAGE_KEYS.FDN],
//         key: PAGE_KEYS.FDN,
//         component: Fdn,
//     },
//     {
//         title: 'Furbo For Good | Furbo Dog Camera',
//         metaTitle: 'Furbo For Good | Furbo Dog Camera',
//         metaDescription: '',
//         path: PAGE_PATHS[PAGE_KEYS.FURBO_FOR_GOOD],
//         key: PAGE_KEYS.FURBO_FOR_GOOD,
//         component: FurboForGood,
//     },
//     {
//         title: 'Furbo Dog Camera Saves Dogs Lives',
//         metaTitle: 'Furbo Dog Camera Saves Dogs Lives',
//         metaDescription:
//             'Unlike other home cameras that send you general motion and sound alerts, Furbo’s Smart Dog Technology monitors your dog’s barking and activities. It will only notify you of dog-related events.',
//         path: PAGE_PATHS[PAGE_KEYS.SAVING_LIVES],
//         key: PAGE_KEYS.SAVING_LIVES,
//         component: SavingLives,
//     },
//     {
//         title: 'Designed for Dogs | Furbo Dog Camera | Furbo Dog Camera',
//         metaTitle: 'Designed for Dogs | Furbo Dog Camera | Furbo Dog Camera',
//         metaDescription:
//             'Furbo is the only pet camera with treat dispenser designed just for dogs. The dog treat camera lets you see, talk, and toss treats to your dog when you’re not home.',
//         path: PAGE_PATHS[PAGE_KEYS.DESIGNED_FOR_DOGS],
//         key: PAGE_KEYS.DESIGNED_FOR_DOGS,
//         component: DesignedForDogs,
//     },
//     {
//         title:
//             'Furbo Blog | Useful Tips, Trending Dogs News, & Funny Pups Videos | Furbo Dog Camera',
//         metaTitle:
//             'Furbo Blog | Useful Tips, Trending Dogs News, & Funny Pups Videos | Furbo Dog Camera',
//         metaDescription:
//             'Read more about Furbo and our global community. Learn how to keep your pup healthy and safe. Find info on training, vets, or breeds. Get the funniest and trending dog news.',
//         path: PAGE_PATHS[PAGE_KEYS.BLOGS],
//         key: PAGE_KEYS.BLOGS,
//         component: Blogs,
//     },
//     {
//         title: 'Press mention | Furbo Dog Camera',
//         metaTitle: 'Press mention | Furbo Dog Camera',
//         metaDescription:
//             'Looking for a pet camera to monitor your dog remotely? See what the media and review sites say about Furbo Dog Camera...',
//         path: PAGE_PATHS[PAGE_KEYS.PRESSES],
//         key: PAGE_KEYS.PRESSES,
//         component: PressMention,
//     },
//     {
//         title:
//             'Furbo Dog Camera Brand Story | Learn About Furbo | Furbo Dog Camera',
//         metaTitle:
//             'Furbo Dog Camera Brand Story | Learn About Furbo | Furbo Dog Camera',
//         metaDescription:
//             'We believe pets are family and family always look after each other. So we came up with a simple idea to always be together with our furry loved ones.',
//         path: PAGE_PATHS[PAGE_KEYS.OUR_STORIES],
//         key: PAGE_KEYS.OUR_STORIES,
//         component: BrandStory,
//     },
//     {
//         title: '',
//         metaTitle: '',
//         metaDescription: '',
//         path: PAGE_PATHS[PAGE_KEYS.FAAS_CHECKOUT],
//         key: PAGE_KEYS.FAAS_CHECKOUT,
//         component: FaasCheckout,
//     },
//     {
//         title: 'Order Lookup | Furbo Dog Camera',
//         metaTitle: 'Order Lookup | Furbo Dog Camera',
//         metaDescription: '',
//         path: PAGE_PATHS[PAGE_KEYS.ORDER_STATUS],
//         key: PAGE_KEYS.ORDER_STATUS,
//         component: OrderStatus,
//     },
//     {
//         title: 'Your Shopping Cart | Furbo Dog Camera',
//         metaTitle: 'Your Shopping Cart | Furbo Dog Camera',
//         metaDescription: '',
//         path: PAGE_PATHS[PAGE_KEYS.CART],
//         key: PAGE_KEYS.CART,
//         component: Cart,
//     },
// ];

// const headerRoutes = [
//     {
//         title: 'Furbo Dog Camera',
//         path: PAGE_PATHS[PAGE_KEYS.PRODUCTS],
//         key: PAGE_KEYS.PRODUCTS,
//         icon: {
//             mdUp: (
//                 <Image
//                     src={FURBO_DOG_CAMERA_ICON}
//                     alt="new-icon"
//                     style={{
//                         top: '50%',
//                         display: 'flex',
//                         left: 0,
//                         width: '45px',
//                         height: '45px',
//                     }}
//                 />
//             ),
//             smDown: (
//                 <Image
//                     src={FURBO_DOG_CAMERA_ICON}
//                     alt="new-icon"
//                     style={{
//                         top: '50%',
//                         display: 'flex',
//                         left: 0,
//                         width: '45px',
//                         height: '45px',
//                     }}
//                 />
//             ),
//         },
//     },
//     {
//         title: 'Furbo Dog Nanny',
//         path: PAGE_PATHS[PAGE_KEYS.FDN],
//         key: PAGE_KEYS.FDN,
//         icon: {
//             mdUp: (
//                 <Image
//                     src={FURBO_DOG_NANNY_ICON}
//                     alt="new-icon"
//                     style={{
//                         top: '50%',
//                         display: 'flex',
//                         left: 0,
//                         width: '45px',
//                         height: '45px',
//                     }}
//                 />
//             ),
//             smDown: (
//                 <Image
//                     src={FURBO_DOG_NANNY_ICON}
//                     alt="new-icon"
//                     style={{
//                         top: '50%',
//                         display: 'flex',
//                         left: 0,
//                         width: '45px',
//                         height: '45px',
//                     }}
//                 />
//             ),
//         },
//     },
//     {
//         title: 'Furbo For Good',
//         path: PAGE_PATHS[PAGE_KEYS.FURBO_FOR_GOOD],
//         key: PAGE_KEYS.FURBO_FOR_GOOD,
//         icon: <></>,
//     },
//     {
//         title: 'Saving Lives',
//         path: PAGE_PATHS[PAGE_KEYS.SAVING_LIVES],
//         key: PAGE_KEYS.SAVING_LIVES,
//         icon: <></>,
//     },
//     {
//         title: 'Designed for Dogs',
//         path: PAGE_PATHS[PAGE_KEYS.DESIGNED_FOR_DOGS],
//         key: PAGE_KEYS.DESIGNED_FOR_DOGS,
//         icon: <></>,
//     },
// ];

// const termsLinks = [
//     {
//         name: 'Privacy & Policy',
//         href: 'http://www.furbo.com/privacy_policy',
//     },
//     {
//         name: 'Terms & Conditions',
//         href: 'http://www.furbo.com/terms_conditions',
//     },
//     {
//         name: 'Sitemap',
//         href: 'https://shopca.furbo.com/pages/sitemap',
//     },
// ];

// const socialLinks = [
//     {
//         name: 'Facebook',
//         href: 'https://www.facebook.com/furboDogCamera/',
//         icon: (
//             <Facebook
//                 style={{ width: '20px', height: '20px', color: '#434343' }}
//             />
//         ),
//     },
//     {
//         name: 'Instagram',
//         href: 'https://www.instagram.com/furbodogcamera/',
//         icon: (
//             <Instagram
//                 style={{ width: '20px', height: '20px', color: '#434343' }}
//             />
//         ),
//     },
//     {
//         name: 'Youtube',
//         href: 'https://www.youtube.com/channel/UCAnXvlbFUu6T8M0Pe_G0nTg',
//         icon: (
//             <YouTube
//                 style={{ width: '20px', height: '20px', color: '#434343' }}
//             />
//         ),
//     },
// ];

const OUR_STORY = 'Our Story';
const WORKS_WITH_ALEXA = 'Works with Alexa';
const BLOGS = 'Blogs';
const PRESS = 'Press';
const CAREERS = 'Careers';
const PRIVACY = 'Privacy';
const TERMS_AND_CONDITIONS = 'Terms & Conditions';
const FAQ = 'FAQ';
const CONTACT_US = 'Contact Us';
const ORDER_STATUS = 'Order Status';
const WARRANTY_AND_RETURNS = 'Warranty and Returns';

const aboutLinks = [
    {
        title: OUR_STORY,
        path: '/pages/brand-story',
    },
    {
        title: WORKS_WITH_ALEXA,
        href: 'https://app.furbo.co/v3/work-with-alexa',
    },
    {
        title: BLOGS,
        path: '/pages/blogs',
    },
    {
        title: PRESS,
        path: '/pages/press-mention',
    },
    {
        title: CAREERS,
        href: 'https://www.linkedin.com/company/tomofun/mycompany/',
    },
    {
        title: PRIVACY,
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/us/PrivacyPolicy.html',
    },
    {
        title: TERMS_AND_CONDITIONS,
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/us/TermsConditions.html',
    },
];

const supportLinks = [
    {
        title: FAQ,
        href: 'https://help.furbo.com/hc/en-us',
    },
    {
        title: CONTACT_US,
        href:
            // eslint-disable-next-line quotes
            "javascript:void(window.open('https://form.jotform.com/Furbo_Support/contact-us?language=en-US', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500'))",
    },
    {
        title: ORDER_STATUS,
        path: '/pages/order-status',
    },
    {
        title: WARRANTY_AND_RETURNS,
        href: 'http://www.furbo.com/shipping_return_warranty"',
    },
];

export {
    // routes,
    // headerRoutes,
    // termsLinks,
    // socialLinks,
    aboutLinks,
    supportLinks,
};
