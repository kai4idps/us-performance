import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import SHOP_ICON from '@/assets/images/general/shop.svg';
import Image from 'components/Image';
import styles from './shopIconButtonStyle';

const useStyles = makeStyles(styles);

const ShopIconButton = (props) => {
    const classes = useStyles();
    const { className } = props;
    const btnClasses = `${classes.button} ${className || null}`;
    const language = useSelector((state) => state.language.code);
    const location = useRouter();
   
    return (
        <div className={classes.root}>
            <Link
                href={{
                    pathname: `/${language}/products/furbo-dog-camera`,
                    query: location.query,
                }}
                className={btnClasses}
                passHref>
                <IconButton>
                    <Icon className={classes.icon}>
                        <Image
                            src={SHOP_ICON}
                            className={classes.image}
                            alt='SHOP_ICON'
                            type="image/svg+xml"
                        />
                    </Icon>
                </IconButton>
            </Link>
        </div>
    );
};

export default ShopIconButton;

ShopIconButton.propTypes = {
    className: PropTypes.string,
};
