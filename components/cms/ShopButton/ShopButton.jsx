import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';

import styles from './shopButtonStyle';

const useStyles = makeStyles(styles);

const ShopButton = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { className, shopButtonText, center = false, onClick } = props;
    const btnClasses = `${classes.button} ${className || null}`;
    const language = useSelector((state) => state.language.code);
    const location = useRouter();
    return (
        <div
            className={classes.root}
            style={{
                justifyContent: smDown
                    ? 'center'
                    : center
                    ? 'center'
                    : 'flex-start',
            }}
        >
             <Link
                href={{
                    pathname:
                        location.pathname ===
                        `/${language}/products/furbo-dog-camera`
                            ? `/${language}/pages/cart`
                            : `/${language}/products/furbo-dog-camera`,
                    query: location.query,
                }}
                passHref>
                <Button
                    className={btnClasses}
                    onClick={onClick}
                >
                     {shopButtonText}
                </Button>
            </Link>
        </div>
    );
};

export default ShopButton;

ShopButton.propTypes = {
    className: PropTypes.object,
    shopButtonText: PropTypes.string.isRequired,
    center: PropTypes.bool,
    onClick: PropTypes.func,
};
