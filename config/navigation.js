import FLAG_AU from '@/assets/images/general/flags/au.svg';
import FLAG_CA from '@/assets/images/general/flags/ca.svg';
import FLAG_DE from '@/assets/images/general/flags/de.svg';
import FLAG_ES from '@/assets/images/general/flags/es.svg';
import FLAG_FR from '@/assets/images/general/flags/fr.svg';
import FLAG_HK from '@/assets/images/general/flags/hk.svg';
import FLAG_IT from '@/assets/images/general/flags/it.svg';
import FLAG_JP from '@/assets/images/general/flags/jp.svg';
import FLAG_MX from '@/assets/images/general/flags/mx.svg';
import FLAG_TW from '@/assets/images/general/flags/tw.svg';
import FLAG_UK from '@/assets/images/general/flags/uk.svg';
import FLAG_US from '@/assets/images/general/flags/us.svg';
import FLAG_SG from '@/assets/images/general/flags/sg.svg';
import FLAG_NL from '@/assets/images/general/flags/nl.svg';
import FLAG_SE from '@/assets/images/general/flags/se.svg';
import FLAG_CN from '@/assets/images/general/flags/cn.svg';

export const DEFAULT_REGION = 'us';

export const VALID_ROUTES = [
    {
        path: '/',
        code: 'root',
        type: 'root',
    },
    {
        path: '/jp',
        code: 'jp',
        type: 'region',
    },
    {
        path: '/tw',
        code: 'tw',
        type: 'region',
    },
    {
        path: '/hk',
        code: 'hk',
        type: 'region',
    },
    {
        path: '/us',
        code: 'us',
        type: 'region',
    },
    {
        path: '/ca',
        code: 'ca',
        type: 'region',
    },
    {
        path: '/mx',
        code: 'mx',
        type: 'region',
    },
    {
        path: '/uk',
        code: 'uk',
        type: 'region',
    },
    {
        path: '/de',
        code: 'de',
        type: 'region',
    },
    {
        path: '/fr',
        code: 'fr',
        type: 'region',
    },
    {
        path: '/it',
        code: 'it',
        type: 'region',
    },
    {
        path: '/es',
        code: 'es',
        type: 'region',
    },
    {
        path: '/au',
        code: 'au',
        type: 'region',
    },
    {
        path: '/sg',
        code: 'sg',
        type: 'region',
    },
    {
        path: '/cn',
        code: 'cn',
        type: 'region',
    },
    {
        path: '/nl',
        code: 'nl',
        type: 'region',
    },
    {
        path: '/se',
        code: 'se',
        type: 'region',
    },
    {
        path: '/account',
        code: 'account',
        type: 'webconsole',
    },
    {
        path: '/subscribe',
        code: 'subscribe',
        type: 'webconsole',
    },
    {
        path: '/redirect',
        code: 'redirect',
        type: 'webconsole',
    },
    {
        path: '/forgotpassword',
        code: 'forgotpassword',
        type: 'webconsole',
    },
    {
        path: '/updatepassword',
        code: 'updatepassword',
        type: 'webconsole',
    },
    {
        path: '/home',
        code: 'home',
        type: 'webconsole',
    },
    {
        path: '/privacy_policy',
        code: 'privacy_policy',
        type: 'privacy_policy',
    },
    {
        path: '/terms_conditions',
        code: 'terms_conditions',
        type: 'terms_conditions',
    },
    {
        path: '/shipping_return_warranty',
        code: 'shipping_return_warranty',
        type: 'shipping_return_warranty',
    },
    {
        path: '/furbojpchat',
        code: 'furbojpchat',
        type: 'furbojpchat',
    },
];

export const PRIVACY_POLICY_INFO = {
    JP: {
        code: 'jp',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/jp/PrivacyPolicy.html',
    },
    TW: {
        code: 'tw',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/zh/PrivacyPolicy.html',
    },
    CA: {
        code: 'ca',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/en/PrivacyPolicy.html',
    },
    MX: {
        code: 'mx',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/en/PrivacyPolicy.html',
    },
    ES: {
        code: 'es',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/es/PrivacyPolicy.html',
    },
    DE: {
        code: 'de',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/de/PrivacyPolicy.html',
    },
    FR: {
        code: 'fr',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/fr/PrivacyPolicy.html',
    },
    IT: {
        code: 'it',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/it/PrivacyPolicy.html',
    },
    UK: {
        code: 'uk',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/gb/PrivacyPolicy.html',
    },
    AU: {
        code: 'au',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/au/PrivacyPolicy.html',
    },
    CN: {
        code: 'cn',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/zh-cn/PrivacyPolicy.html',
    },
    SG: {
        code: 'sg',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/en/PrivacyPolicy.html',
    },
    US: {
        code: 'us',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/us/PrivacyPolicy.html',
    },
    FALLBACK: {
        code: 'us',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/us/PrivacyPolicy.html',
    },
};

export const TERMS_CONDITION_INFO = {
    JP: {
        code: 'jp',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/jp/TermsConditions.html',
    },
    TW: {
        code: 'tw',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/zh/TermsConditions.html',
    },
    CA: {
        code: 'ca',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/en/TermsConditions.html',
    },
    MX: {
        code: 'mx',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/en/TermsConditions.html',
    },
    ES: {
        code: 'es',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/es/TermsConditions.html',
    },
    DE: {
        code: 'de',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/de/TermsConditions.html',
    },
    FR: {
        code: 'fr',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/fr/TermsConditions.html',
    },
    IT: {
        code: 'it',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/it/TermsConditions.html',
    },
    UK: {
        code: 'uk',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/gb/TermsConditions.html',
    },
    AU: {
        code: 'au',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/au/TermsConditions.html',
    },
    CN: {
        code: 'cn',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/zh-cn/TermsConditions.html',
    },
    SG: {
        code: 'sg',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/en/TermsConditions.html',
    },
    US: {
        code: 'us',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/us/TermsConditions.html',
    },
    FALLBACK: {
        code: 'us',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/us/TermsConditions.html',
    },
};

export const SHIPPING_RETURN_WARRANTY_INFO = {
    US: {
        code: 'us',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/en/ShippingReturnsWarrantyPolicy.html',
    },
    FALLBACK: {
        code: 'us',
        href:
            'https://dh1mqkcjivi9n.cloudfront.net/policy/en/ShippingReturnsWarrantyPolicy.html',
    },
};

export const FURBO_CHAT_INFO = {
    JP: {
        code: 'jp',
        href:
            'http://v2.zopim.com/widget/livechat.html?key=3gwcHfvrR1oqiNnD3Mhnu0jWhChVsXWi',
    },
    FALLBACK: {
        code: 'jp',
        href:
            'http://v2.zopim.com/widget/livechat.html?key=3gwcHfvrR1oqiNnD3Mhnu0jWhChVsXWi',
    },
};

export const FAQ_INFO = {
    JP: { code: 'jp', href: 'https://help.furbo.com/hc/jp' },
    TW: { code: 'tw', href: 'https://help.furbo.com/hc/tw' },
    CA: { code: 'ca', href: 'https://help.furbo.com/hc/ca' },
    MX: { code: 'mx', href: 'https://help.furbo.com/hc/mx' },
    ES: { code: 'es', href: 'https://help.furbo.com/hc/es' },
    DE: { code: 'de', href: 'https://help.furbo.com/hc/de' },
    FR: { code: 'fr', href: 'https://help.furbo.com/hc/fr' },
    IT: { code: 'it', href: 'https://help.furbo.com/hc/it' },
    UK: { code: 'uk', href: 'https://help.furbo.com/hc/gb' },
    AU: { code: 'au', href: 'https://help.furbo.com/hc/au' },
    CN: { code: 'cn', href: 'https://help.furbo.com/hc/cn' },
    SG: { code: 'sg', href: 'https://help.furbo.com/hc/sg' },
    US: { code: 'us', href: 'https://help.furbo.com/hc/us' },
    FALLBACK: { code: 'us', href: 'https://help.furbo.com/hc/us' },
};

export const REGION_INFO = {
    US: {
        country: 'United States',
        code: 'us',
        language: 'en-US',
        href: 'https://shopus.furbo.com',
        isRedirect: true,
        image: FLAG_US,
    },
    CA: {
        country: 'Canada',
        code: 'ca',
        language: 'en-CA',
        href: 'https://shopca.furbo.com',
        isRedirect: true,
        image: FLAG_CA,
    },
    CN: {
        country: '中国',
        code: 'cn',
        language: 'zh-CN',
        href: 'https://shopcn.furbo.com',
        isRedirect: true,
        image: FLAG_CN,
    },
    MX: {
        country: 'México',
        code: 'mx',
        language: 'es-MX',
        href: 'https://shopmx.furbo.com',
        isRedirect: true,
        image: FLAG_MX,
    },
    UK: {
        country: 'United Kingdom',
        code: 'uk',
        language: 'en-GB',
        href: 'https://shopuk.furbo.com',
        isRedirect: true,
        image: FLAG_UK,
    },
    DE: {
        country: 'Deutschland',
        code: 'de',
        language: 'de-DE',
        href: 'https://shopde.furbo.com',
        isRedirect: true,
        image: FLAG_DE,
    },
    FR: {
        country: 'France',
        code: 'fr',
        language: 'fr-FR',
        href: 'https://shopfr.furbo.com',
        isRedirect: true,
        image: FLAG_FR,
    },
    IT: {
        country: 'Italia',
        code: 'it',
        language: 'it-IT',
        href: 'https://shopit.furbo.com',
        isRedirect: true,
        image: FLAG_IT,
    },
    ES: {
        country: 'Espana',
        code: 'es',
        language: 'es-ES',
        href: 'https://shopes.furbo.com',
        isRedirect: true,
        image: FLAG_ES,
    },
    SE: {
        country: 'Sverige',
        code: 'se',
        language: 'sv-SE',
        href: 'https://shopse.furbo.com',
        isRedirect: true,
        image: FLAG_SE,
    },
    NL: {
        country: 'Nederland',
        code: 'nl',
        language: 'nl-NL',
        href: 'https://shopnl.furbo.com',
        isRedirect: true,
        image: FLAG_NL,
    },
    AU: {
        country: 'Australia',
        code: 'au',
        language: 'en-AU',
        href: 'https://shopau.furbo.com',
        isRedirect: true,
        image: FLAG_AU,
    },
    HK: {
        country: '香港',
        code: 'hk',
        language: 'zh-HK',
        href: 'https://shophk.furbo.com',
        isRedirect: true,
        image: FLAG_HK,
    },
    TW: {
        country: '臺灣',
        code: 'tw',
        language: 'zh-TW',
        href: 'https://shoptw.furbo.com',
        isRedirect: false,
        image: FLAG_TW,
    },
    JP: {
        country: '日本',
        code: 'jp',
        language: 'ja',
        href: 'https://shopjp.furbo.com',
        isRedirect: true,
        image: FLAG_JP,
    },
    SG: {
        country: 'Singapore',
        code: 'sg',
        language: 'en-SG',
        href: 'https://shopsg.furbo.com',
        isRedirect: true,
        image: FLAG_SG,
    },
};
