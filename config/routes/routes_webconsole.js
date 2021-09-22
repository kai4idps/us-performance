// import Login from 'containers/webconsole/Login';
// import AccountInfo from 'containers/webconsole/AccountInfo';
// import SubscribeFDN from 'containers/webconsole/SubscribeFDN';
// import SubscribeFDNResult from 'containers/webconsole/SubscribeFDNResult';
// import AccountVerification from 'containers/webconsole/AccountVerification';
// import AccountVerificationStatusEmailSent from 'containers/webconsole/AccountVerificationStatusEmailSent';
// import AccountVerificationStatusExpired from 'containers/webconsole/AccountVerificationStatusExpired';
// import AccountVerificationStatusExpiredRedirect from 'containers/webconsole/AccountVerificationStatusExpiredRedirect';
// import AccountVerificationStatusFailed from 'containers/webconsole/AccountVerificationStatusFailed';
// import AccountVerificationStatusSuccess from 'containers/webconsole/AccountVerificationStatusSuccess';
// import InfoManagement from 'containers/webconsole/InfoManagement';
// import Redirect from 'containers/webconsole/Redirect';
// import FDNCancelSubscriptionCancel from 'containers/webconsole/FDNCancelSubscriptionCancel';
// import FDNCancelSubscriptionCancelConfirm from 'containers/webconsole/FDNCancelSubscriptionCancelConfirm';
// import FDNResumeCancelSubscription from 'containers/webconsole/FDNResumeCancelSubscription';
// import FaaSCancelSubscriptionCancel from 'containers/webconsole/FaaSCancelSubscriptionCancel';
// import FaaSCancelSubscriptionCancelSupport from 'containers/webconsole/FaaSCancelSubscriptionCancelSupport';
// import UpdateCard from 'containers/webconsole/UpdateCard';
// import UpdateCardResult from 'containers/webconsole/UpdateCardResult';
// import SubscribeFDNChurn from 'containers/webconsole/SubscribeFDNChurn';
// import FDNIntro from 'containers/webconsole/FDNIntro';

export const PAGE_KEYS = {
    LOGIN: 'LOGIN',
    ACCOUNT_INFO: 'ACCOUNT_INFO',
    ACCOUNT_INFO_MANAGEMENT: 'ACCOUNT_INFO_MANAGEMENT',
    ACCOUNT_MANAGE_UPDATE_CARD: 'ACCOUNT_MANAGE_UPDATE_CARD',
    ACCOUNT_MANAGE_UPDATE_CARD_SUCCESS: 'ACCOUNT_MANAGE_UPDATE_CARD_SUCCESS',
    SUBSCRIBE_FDN: 'SUBSCRIBE_FDN',
    SUBSCRIBE_FDN_FAST: 'SUBSCRIBE_FDN_FAST',
    SUBSCRIBE_FDN_SUCCESS: 'SUBSCRIBE_FDN_SUCCESS',
    ACCOUNT_VERIFICATION: 'ACCOUNT_VERIFICATION',
    ACCOUNT_VERIFICATION_EMAIL_SENT: 'ACCOUNT_VERIFICATION_EMAIL_SENT',
    ACCOUNT_VERIFICATION_SUCCESS: 'ACCOUNT_VERIFICATION_SUCCESS',
    ACCOUNT_VERIFICATION_EXPIRED: 'ACCOUNT_VERIFICATION_EXPIRED',
    ACCOUNT_VERIFICATION_SESSION_TIMEOUT: 'ACCOUNT_VERIFICATION_SESSION_TIMEOUT',
    ACCOUNT_VERIFICATION_FAILED: 'ACCOUNT_VERIFICATION_FAILED',
    FDN_SUBSCRIPTION_CANCEL: 'FDN_SUBSCRIPTION_CANCEL',
    FDN_SUBSCRIPTION_CANCEL_CONFIRM: 'FDN_SUBSCRIPTION_CANCEL_CONFIRM',
    FAAS_SUBSCRIPTION_CANCEL: 'FAAS_SUBSCRIPTION_CANCEL',
    FAAS_SUBSCRIPTION_CANCEL_SUPPORT: 'FAAS_SUBSCRIPTION_CANCEL_SUPPORT',
    RESUME_CANCEL_SUCCESS: 'RESUME_CANCEL_SUCCESS',
    FDN_INTRO: 'FDN_INTRO',
    REDIRECT: 'REDIRECT',
};

export const RESULTS = {
    SUCCESS: 'success',
    FAILED: 'failed'
};

export const VERIFICATION_STATUS = {
    SUCCESS: 'complete',
    EXPIRED: 'expired',
    SESSION_TIMEOUT: 'sessiontimeout',
    FAILED: 'failed',
    EMAIL_SENT: 'sent',
};

export const CANCEL_RESULTS = {
    CANCEL: 'cancel',
    CANCEL_CONFIRM: 'cancel-confirm',
    CANCEL_SUPPORT: 'cancel-support',
    RESUME: 'resume',
};

export const PAGE_PATHS = {
    [PAGE_KEYS.LOGIN]: '/account',
    [PAGE_KEYS.ACCOUNT_INFO]: '/account/home',
    [PAGE_KEYS.ACCOUNT_INFO_MANAGEMENT]: '/account/manage/cancel',
    [PAGE_KEYS.ACCOUNT_MANAGE_UPDATE_CARD]: '/account/manage/update-card',
    [PAGE_KEYS.ACCOUNT_MANAGE_UPDATE_CARD_SUCCESS]: '/account/manage/update-card/success',
    [PAGE_KEYS.SUBSCRIBE_FDN]: '/subscribe/furbodognanny',
    [PAGE_KEYS.SUBSCRIBE_FDN_FAST]: '/subscribe/furbodognanny/fast-checkout',
    [PAGE_KEYS.SUBSCRIBE_FDN_SUCCESS]: '/subscribe/furbodognanny/payment/success',
    [PAGE_KEYS.ACCOUNT_VERIFICATION]: '/account/verification',
    [PAGE_KEYS.ACCOUNT_VERIFICATION_EMAIL_SENT]: `/account/verification/${VERIFICATION_STATUS.EMAIL_SENT}`,
    [PAGE_KEYS.ACCOUNT_VERIFICATION_SUCCESS]: `/account/verification/${VERIFICATION_STATUS.SUCCESS}`,
    [PAGE_KEYS.ACCOUNT_VERIFICATION_EXPIRED]: `/account/verification/${VERIFICATION_STATUS.EXPIRED}`,
    [PAGE_KEYS.ACCOUNT_VERIFICATION_SESSION_TIMEOUT]: `/account/verification/${VERIFICATION_STATUS.SESSION_TIMEOUT}`,
    [PAGE_KEYS.ACCOUNT_VERIFICATION_FAILED]: `/account/verification/${VERIFICATION_STATUS.FAILED}`,
    [PAGE_KEYS.FDN_SUBSCRIPTION_CANCEL]: `/subscribe/furbodognanny/${CANCEL_RESULTS.CANCEL}`, 
    [PAGE_KEYS.FDN_SUBSCRIPTION_CANCEL_CONFIRM]: `/subscribe/furbodognanny/${CANCEL_RESULTS.CANCEL_CONFIRM}`,
    [PAGE_KEYS.RESUME_CANCEL_SUCCESS]: `/subscribe/furbodognanny/${CANCEL_RESULTS.RESUME}`,
    [PAGE_KEYS.FAAS_SUBSCRIPTION_CANCEL]: `/subscribe/nannycambundle/${CANCEL_RESULTS.CANCEL}`,
    [PAGE_KEYS.FAAS_SUBSCRIPTION_CANCEL_SUPPORT]: `/subscribe/nannycambundle/${CANCEL_RESULTS.CANCEL_SUPPORT}`,
    [PAGE_KEYS.FDN_INTRO]: '/home/furbodognanny',
    [PAGE_KEYS.REDIRECT]: '/redirect'
};

const routes = [
    // {
    //     title: 'web_console:web_console.login.page_name',
    //     metaTitle: 'web_console:web_console.login.doc_title',
    //     metaDescription: 'web_console:web_console.login.doc_description',
    //     path: PAGE_PATHS[PAGE_KEYS.LOGIN],
    //     key: PAGE_KEYS.LOGIN,
    //     component: Login,
    //     auth: false,
    // },
    // {
    //     title: 'web_console:web_console.info.page_name',
    //     metaTitle: 'web_console:web_console.info.doc_title',
    //     metaDescription: 'web_console:web_console.info.doc_description',
    //     path: PAGE_PATHS[PAGE_KEYS.ACCOUNT_INFO],
    //     key: PAGE_KEYS.ACCOUNT_INFO,
    //     component: AccountInfo,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.info_management.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.ACCOUNT_INFO_MANAGEMENT],
    //     key: PAGE_KEYS.ACCOUNT_INFO_MANAGEMENT,
    //     component: InfoManagement,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.update_card.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.ACCOUNT_MANAGE_UPDATE_CARD],
    //     key: PAGE_KEYS.ACCOUNT_MANAGE_UPDATE_CARD,
    //     component: UpdateCard,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.update_card_success.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.ACCOUNT_MANAGE_UPDATE_CARD_SUCCESS],
    //     key: PAGE_KEYS.ACCOUNT_MANAGE_UPDATE_CARD_SUCCESS,
    //     component: UpdateCardResult,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.subscribe_fdn.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.SUBSCRIBE_FDN],
    //     key: PAGE_KEYS.SUBSCRIBE_FDN,
    //     component: SubscribeFDN,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.subscribe_fdn_fast.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.SUBSCRIBE_FDN_FAST],
    //     key: PAGE_KEYS.SUBSCRIBE_FDN_FAST,
    //     component: SubscribeFDNChurn,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.subscribe_fdn_success.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.SUBSCRIBE_FDN_SUCCESS],
    //     key: PAGE_KEYS.SUBSCRIBE_FDN_SUCCESS,
    //     component: SubscribeFDNResult,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.account_verification.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.ACCOUNT_VERIFICATION],
    //     key: PAGE_KEYS.ACCOUNT_VERIFICATION,
    //     component: AccountVerification,
    //     auth: false,
    // },
    // {
    //     title: 'web_console:web_console.account_email_sent.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.ACCOUNT_VERIFICATION_EMAIL_SENT],
    //     key: PAGE_KEYS.ACCOUNT_VERIFICATION_EMAIL_SENT,
    //     component: AccountVerificationStatusEmailSent,
    //     auth: false,
    // },
    // {
    //     title: 'web_console:web_console.account_verification_result.success.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.ACCOUNT_VERIFICATION_SUCCESS],
    //     key: PAGE_KEYS.ACCOUNT_VERIFICATION_SUCCESS,
    //     component: AccountVerificationStatusSuccess,
    //     auth: false,
    // },
    // {
    //     title: 'web_console:web_console.account_verification_result.expired.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.ACCOUNT_VERIFICATION_EXPIRED],
    //     key: PAGE_KEYS.ACCOUNT_VERIFICATION_EXPIRED,
    //     component: AccountVerificationStatusExpired,
    //     auth: false,
    // },
    // {
    //     title: 'web_console:web_console.account_verification_result.session_timeout.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.ACCOUNT_VERIFICATION_SESSION_TIMEOUT],
    //     key: PAGE_KEYS.ACCOUNT_VERIFICATION_SESSION_TIMEOUT,
    //     component: AccountVerificationStatusExpiredRedirect,
    //     auth: false,
    // },
    // {
    //     title: 'web_console:web_console.account_verification_result.failed.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.ACCOUNT_VERIFICATION_FAILED],
    //     key: PAGE_KEYS.ACCOUNT_VERIFICATION_FAILED,
    //     component: AccountVerificationStatusFailed,
    //     auth: false,
    // },
    // {
    //     title: 'web_console:web_console.fdn_cancel_subscription.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.FDN_SUBSCRIPTION_CANCEL],
    //     key: PAGE_KEYS.FDN_SUBSCRIPTION_CANCEL,
    //     component: FDNCancelSubscriptionCancel,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.fdn_cancel_subscription_confirm.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.FDN_SUBSCRIPTION_CANCEL_CONFIRM],
    //     key: PAGE_KEYS.FDN_SUBSCRIPTION_CANCEL_CONFIRM,
    //     component: FDNCancelSubscriptionCancelConfirm,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.resume_cancel_subscription.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.RESUME_CANCEL_SUCCESS],
    //     key: PAGE_KEYS.RESUME_CANCEL_SUCCESS,
    //     component: FDNResumeCancelSubscription,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.faas_cancel_subscription.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.FAAS_SUBSCRIPTION_CANCEL],
    //     key: PAGE_KEYS.FAAS_SUBSCRIPTION_CANCEL,
    //     component: FaaSCancelSubscriptionCancel,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.faas_cancel_subscription_support.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.FAAS_SUBSCRIPTION_CANCEL_SUPPORT],
    //     key: PAGE_KEYS.FAAS_SUBSCRIPTION_CANCEL_SUPPORT,
    //     component: FaaSCancelSubscriptionCancelSupport,
    //     auth: true,
    // },
    // {
    //     title: 'web_console:web_console.fdn.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.FDN_INTRO],
    //     key: PAGE_KEYS.FDN_INTRO,
    //     component: FDNIntro,
    //     auth: false,
    // },
    // {
    //     title: 'web_console:web_console.redirect.page_name',
    //     path: PAGE_PATHS[PAGE_KEYS.REDIRECT],
    //     key: PAGE_KEYS.REDIRECT,
    //     component: Redirect,
    //     auth: false,
    // },
];

export default routes;
