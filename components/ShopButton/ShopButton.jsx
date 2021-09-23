import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'next-i18next';

import styles from './shopButtonStyle';

const useStyles = makeStyles(styles);

export default function ShopButton(props) {
    const classes = useStyles();
    const { className } = props;
    const btnClasses = `${classes.button} ${className || null}`;
    const { t } = useTranslation();
    const language = useSelector((state) => state.language.code);
    const location = useRouter();

    return (
        <div className={classes.root}>
             <Link
                href={{
                    pathname: `/${language}/products/furbo-dog-camera/`,
                    query: location.query,
                }}
                passHref>
                <Button
                    className={btnClasses}
                >
                    {t('common.shop_now')}
                </Button>
            </Link>
        </div>
    );
}

ShopButton.propTypes = {
    className: PropTypes.string,
};
