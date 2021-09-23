import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import Image from '@/components/Image';
import { FURBO_LOGO_DARK_SVG } from '@/config/imageConfigs/header';
import styles from './homeButtonStyle';

const useStyles = makeStyles(styles);

const HomeButton = () => {
    const classes = useStyles();
    const region = useSelector((state) => state.region.code);
    const location = useRouter();

    const handleHomeClicked = () => {
        window.location = location.query
            ? `/${region}${location.query}`
            : `/${region}`;
    };

    return (
        <div
            role="none"
            className={classes.iconButton}
            onClick={handleHomeClicked}
        >
            <Icon className={classes.icon}>
                <Image
                    className={classes.icon}
                    alt="furbo-logo"
                    src={FURBO_LOGO_DARK_SVG}
                    type="image/svg+xml"
                    loading="eager"
                />
            </Icon>
        </div>
    );
};

export default HomeButton;
