export const STORAGE_PREFIX = 'furbo_';

export const STORAGE_KEY = {
    ACCOUNT_ID: `${STORAGE_PREFIX}accountId`,
    COGNITO_TOKEN: `${STORAGE_PREFIX}cognitoToken`,
    ACCOUNT_LOCALE: `${STORAGE_PREFIX}account_locale`,
    FULL_ACCOUNT_LOCALE: `${STORAGE_PREFIX}full_account_locale`,
    EMAIL: `${STORAGE_PREFIX}email`,
    REMEMBER_ME_IS_CHECKED: `${STORAGE_PREFIX}remember_me_is_checked`,
    MOBILE_ID: 'mobileId',
    MFA_AUTH_CODE: 'mfaAuthCode',
};

export const getAllStorages = () => {
    return localStorage;
};

export const setStorage = (key, value) => {
    const prevCookieValue = localStorage.getItem(key);
    if (!prevCookieValue || prevCookieValue !== value) {
        localStorage.setItem(key, value);
    }
};

export const removeStorage = (key) => {
    localStorage.removeItem(key);
};

export const readStorage = (key) => {
    return localStorage.getItem(key);
};

export const clearAllStorages = (type, reason, accountId, email) => {
    const isRememberMeCheckedCookie = localStorage.getItem(
        STORAGE_KEY.REMEMBER_ME_IS_CHECKED,
    );
    const isRememberMeChecked =
        isRememberMeCheckedCookie && isRememberMeCheckedCookie === 'true';
    Object.keys(getAllStorages()).forEach((key) => {
        if (
            key.toLowerCase().includes(STORAGE_PREFIX) &&
            key !== STORAGE_KEY.REMEMBER_ME_IS_CHECKED &&
            (!isRememberMeChecked ||
                (isRememberMeChecked && key !== STORAGE_KEY.EMAIL))
        ) {
            localStorage.removeItem(key);
        }
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'logout',
        user_id: accountId,
        email: email,
        logout_type: type,
        logout_reason: reason,
    });
};
