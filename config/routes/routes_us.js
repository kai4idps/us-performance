import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import YouTube from '@material-ui/icons/YouTube';
import NEW_ICON from '@/assets/images/general/new.svg';
import Image from 'components/Image';
import Home from '@/containers/us/Home';
// import BrandStory from 'containers/us/BrandStory';
// import DesignedForDogs from 'containers/us/DesignedForDogs';
// import Faas from 'containers/us/Faas';
// import Blog from 'containers/us/Blog';
// import PressMention from 'containers/us/PressMention';
// import Product from 'containers/us/Product';
// import SaveDogsLives from 'containers/us/SaveDogsLives';
// import FaasCheckout from 'containers/us/FaasCheckout';
// import Cart from 'containers/us/Cart';
// import OrderStatus from 'containers/us/OrderStatus';

export const PAGE_KEYS = {
    HOME: 'HOME',
    PRODUCTS: 'PRODUCTS',
    FAAS: 'FAAS',
    SAVE_DOG_LIVES: 'SAVE_DOG_LIVES',
    DESIGNED_FOR_DOGS: 'DESIGNED_FOR_DOGS',
    BLOGS: 'BLOGS',
    PRESSES: 'PRESSES',
    FAQ: 'FAQ',
    OUR_STORIES: 'OUR_STORIES',
    FAAS_CHECKOUT: 'FAAS_CHECKOUT',
    ORDER_STATUS: 'ORDER_STATUS',
    CART: 'CART',
};

export const PAGE_PATHS = {
    [PAGE_KEYS.HOME]: '/us',
    [PAGE_KEYS.PRODUCTS]: '/us/products/furbo-dog-camera',
    [PAGE_KEYS.FAAS]: '/us/products/furbo-nanny-cam-bundle',
    [PAGE_KEYS.SAVE_DOG_LIVES]: '/us/pages/save-dog-lives',
    [PAGE_KEYS.DESIGNED_FOR_DOGS]: '/us/pages/designed-for-dogs',
    [PAGE_KEYS.BLOGS]: '/us/pages/blogs',
    [PAGE_KEYS.PRESSES]: '/us/pages/press-mention',
    [PAGE_KEYS.OUR_STORIES]: '/us/pages/brand-story',
    [PAGE_KEYS.FAAS_CHECKOUT]: '/us/pages/faas-checkout',
    [PAGE_KEYS.ORDER_STATUS]: '/us/pages/order-status',
    [PAGE_KEYS.CART]: '/us/pages/cart',
};

const routes = [
    {
        title: 'home.doc_title',
        metaTitle: 'home.meta_title',
        metaDescription: 'home.meta_description',
        path: PAGE_PATHS[PAGE_KEYS.HOME],
        key: PAGE_KEYS.HOME,
        component: Home,
    },
//     {
//         title: 'product.doc_title',
//         metaTitle: 'home.meta_title',
//         metaDescription: 'product.meta_description',
//         path: PAGE_PATHS[PAGE_KEYS.PRODUCTS],
//         key: PAGE_KEYS.PRODUCTS,
//         component: Product,
//     },
//     {
//         title: 'faas.doc_title',
//         metaTitle: 'home.meta_title',
//         metaDescription: 'faas.meta_description',
//         path: PAGE_PATHS[PAGE_KEYS.FAAS],
//         key: PAGE_KEYS.FAAS,
//         component: Faas,
//     },
//     {
//         title: 'save_dog_lives.doc_title',
//         metaTitle: 'home.meta_title',
//         metaDescription: 'save_dog_lives.meta_description',
//         path: PAGE_PATHS[PAGE_KEYS.SAVE_DOG_LIVES],
//         key: PAGE_KEYS.SAVE_DOG_LIVES,
//         component: SaveDogsLives,
//     },
//     {
//         title: 'designed_for_dogs.doc_title',
//         metaTitle: 'home.meta_title',
//         metaDescription: 'designed_for_dogs.meta_description',
//         path: PAGE_PATHS[PAGE_KEYS.DESIGNED_FOR_DOGS],
//         key: PAGE_KEYS.DESIGNED_FOR_DOGS,
//         component: DesignedForDogs,
//     },
//     {
//         title: 'blogs.doc_title',
//         metaTitle: 'home.meta_title',
//         metaDescription: 'blogs.meta_description',
//         path: PAGE_PATHS[PAGE_KEYS.BLOGS],
//         key: PAGE_KEYS.BLOGS,
//         component: Blog,
//     },
//     {
//         title: 'press_mention.doc_title',
//         metaTitle: 'home.meta_title',
//         metaDescription: 'press_mention.meta_description',
//         path: PAGE_PATHS[PAGE_KEYS.PRESSES],
//         key: PAGE_KEYS.PRESSES,
//         component: PressMention,
//     },
//     {
//         title: 'brand_story.doc_title',
//         metaTitle: 'home.meta_title',
//         metaDescription: 'brand_story.meta_description',
//         path: PAGE_PATHS[PAGE_KEYS.OUR_STORIES],
//         key: PAGE_KEYS.OUR_STORIES,
//         component: BrandStory,
//     },
//     {
//         title: 'faas_checkout.doc_title',
//         metaTitle: 'home.meta_title',
//         metaDescription: 'faas_checkout.meta_description',
//         path: PAGE_PATHS[PAGE_KEYS.FAAS_CHECKOUT],
//         key: PAGE_KEYS.FAAS_CHECKOUT,
//         component: FaasCheckout,
//     },
//     {
//         title: 'order_status.doc_title',
//         metaTitle: 'home.meta_title',
//         metaDescription: 'order_status.meta_description',
//         path: PAGE_PATHS[PAGE_KEYS.ORDER_STATUS],
//         key: PAGE_KEYS.ORDER_STATUS,
//         component: OrderStatus,
//     },
//     {
//         title: 'cart.doc_title',
//         metaTitle: 'home.meta_title',
//         metaDescription: 'cart.meta_description',
//         path: PAGE_PATHS[PAGE_KEYS.CART],
//         key: PAGE_KEYS.CART,
//         component: Cart,
//     },
];

const headerRoutes = [
    {
        title: 'faas.page_name',
        path: PAGE_PATHS[PAGE_KEYS.FAAS],
        key: PAGE_KEYS.FAAS,
        icon: {
            mdUp: (
                <Image
                    src={NEW_ICON.src}
                    alt="new-icon"
                    type="image/svg+xml"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        transform: 'translate(-20px, 5px)',
                        width: '28px',
                        height: '28px',
                    }}
                />
            ),
            smDown: (
                <Image
                    src={NEW_ICON.src}
                    alt="new-icon"
                    type="image/svg+xml"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        transform: 'translate(16px, -8px)',
                        width: '28px',
                        height: '28px',
                    }}
                />
            ),
        },
    },
    {
        title: 'product.page_name',
        path: PAGE_PATHS[PAGE_KEYS.PRODUCTS],
        key: PAGE_KEYS.PRODUCTS,
        icon: <></>,
    },
    {
        title: 'designed_for_dogs.page_name',
        path: PAGE_PATHS[PAGE_KEYS.DESIGNED_FOR_DOGS],
        key: PAGE_KEYS.DESIGNED_FOR_DOGS,
        icon: <></>,
    },
    {
        title: 'save_dog_lives.page_name',
        path: PAGE_PATHS[PAGE_KEYS.SAVE_DOG_LIVES],
        key: PAGE_KEYS.SAVE_DOG_LIVES,
        icon: <></>,
    },
    {
        title: 'Support',
        path: PAGE_PATHS[PAGE_KEYS.SUPPORT],
        key: PAGE_KEYS.SUPPORT,
        icon: <></>,
        href: 'https://help.furbo.com/hc/en-us',
    },
];

const termsLinks = [
    {
        name: 'footer.terms_link.privacy_policy',
        href: 'http://www.furbo.com/privacy_policy',
    },
    {
        name: 'footer.terms_link.terms_and_condition',
        href: 'http://www.furbo.com/terms_conditions',
    },
    {
        name: 'footer.terms_link.sitemap',
        href: 'https://shopus.furbo.com/pages/sitemap',
    },
];

const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/furboDogCamera/',
        icon: (
            <Facebook
                style={{ width: '30px', height: '30px', color: '#333333' }}
            />
        ),
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/furbodogcamera/',
        icon: (
            <Instagram
                style={{ width: '30px', height: '30px', color: '#333333' }}
            />
        ),
    },
    {
        name: 'Youtube',
        href: 'https://www.youtube.com/channel/UCAnXvlbFUu6T8M0Pe_G0nTg',
        icon: (
            <YouTube
                style={{ width: '30px', height: '30px', color: '#333333' }}
            />
        ),
    },
];

export { routes, headerRoutes,  termsLinks, socialLinks };
