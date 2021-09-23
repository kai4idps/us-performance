import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import { useLocation, useHistory } from 'react-router-dom';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Image from '@/components/Image';
import Icon from '@material-ui/core/Icon';
import { PAGE_PATHS, PAGE_KEYS } from '@/config/routes/routes_webconsole';
import ACCOUNT_ICON from '@/assets/images/general/account.svg';
import HOME_ICON from '@/assets/images/general/home.svg';
import SIGN_OUT_ICON from '@/assets/images/general/sign_out.svg';
import { clearAllStorages, readStorage, STORAGE_KEY } from '@/utils/localStorage';
import { isEmpty } from '@/utils/helpers';
import styles from './accountButtonStyle';

const useStyles = makeStyles(styles);

const localSearchHandler = (sq) => {
    const param = new URLSearchParams(sq);
    param.delete('token');
    param.delete('step');
    return param.toString();
};
const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};

const AccountButton = (props) => {
    const classes = useStyles();
    const { isAuth, content, className } = props;
    const { t } = useTranslation();
    const ref = useRef(null);
    const [isDropdown, setIsDropdown] = useState(false);
    const history = useHistory();
    const location = useRouter();
    const accountId = readStorage(STORAGE_KEY.ACCOUNT_ID);
    const email = readStorage(STORAGE_KEY.EMAIL);
    const rootClasses = `${classes.root} ${className || null}`;

    const handleCloseDropdown = () => {
        setIsDropdown(false);
    };

    const handleToggleDropdown = () => {
        setIsDropdown(!isDropdown);
    };

    const handleAccountButtonClick = () => {
        if (isAuth) {
            handleToggleDropdown();
        } else {
            handleClickHome();
        }
    };

    const handleClickHome = () => {
        handleToggleDropdown();
        history.push({
            pathname: PAGE_PATHS[PAGE_KEYS.ACCOUNT_INFO],
            search: localSearchHandler(location.query),
        });
    };

    const handleClickSignOut = () => {
        clearAllStorages('Manual', 'USER_MANUAL_LOGOUT', accountId, email);
        handleToggleDropdown();
        if (
            location.pathname !== PAGE_PATHS[PAGE_KEYS.LOGIN] &&
            location.pathname !== PAGE_PATHS[PAGE_KEYS.ACCOUNT_VERIFICATION] &&
            location.pathname !==
                PAGE_PATHS[PAGE_KEYS.ACCOUNT_VERIFICATION_EXPIRED]
        ) {
            const sq = localSearchHandler(location.query);
            window.location = `?${sq}`;
        }
    };

    useClickOutside(ref, handleCloseDropdown);

    if (!isEmpty(content)) {
        return (
            <div
                role="none"
                className={rootClasses}
                onClick={handleAccountButtonClick}
            >
                {content}
            </div>
        );
    }

    return (
        <div ref={ref} className={rootClasses}>
            <IconButton
                className={classes.button}
                onClick={handleAccountButtonClick}
            >
                <Icon className={classes.icon}>
                    <Image
                        src={ACCOUNT_ICON}
                        alt='ACCOUNT_ICON'
                        className={classes.image}
                        type="image/svg+xml"
                    />
                </Icon>
            </IconButton>
            {isDropdown && (
                <div className={classes.dropdown}>
                    <div
                        role="none"
                        className={classes.dropdownMenu}
                        onClick={handleClickHome}
                    >
                        <Icon className={classes.dropdownIcon}>
                            <Image
                                alt='HOME_ICON'
                                src={HOME_ICON}
                                className={classes.menuHomeImage}
                                type="image/svg+xml"
                            />
                        </Icon>
                        {t('web_console:web_console.header.my_account')}
                    </div>
                    <hr className={classes.hr} />
                    <div
                        role="none"
                        className={classes.dropdownMenu}
                        onClick={handleClickSignOut}
                    >
                        <Icon className={classes.dropdownIcon}>
                            <Image
                                alt={SIGN_OUT_ICON}
                                src={SIGN_OUT_ICON}
                                className={classes.menuSignOutImage}
                                type="image/svg+xml"
                            />
                        </Icon>
                        {t('web_console:web_console.header.sign_out')}
                    </div>
                </div>
            )}
        </div>
    );
};

AccountButton.propTypes = {
    isAuth: PropTypes.bool,
    content: PropTypes.node,
    className: PropTypes.string,
};

export default AccountButton;
