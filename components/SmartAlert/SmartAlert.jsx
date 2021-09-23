import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-responsive-carousel';
import Image from '@/components/Image';
import {
    ACTIVITY_YELLOW_ICON_SVG,
    BARKING_YELLOW_ICON_SVG,
    SELFIE_YELLOW_ICON_SVG,
    HOME_EMERGENCY_RED_ICON_SVG,
    PERSON_YELLOW_ICON_SVG,
    // SMART_ALERTS_SLIDE_DESKTOP_JPG,
    // SMART_ALERTS_SLIDE_DESKTOP_WEBP,
    // SMART_ALERTS_SLIDE_MOBILE_JPG,
    // SMART_ALERTS_SLIDE_MOBILE_WEBP,
    SMART_ALERTS_SLIDE_ACTIVITY_DESKTOP_WEBP,
    SMART_ALERTS_SLIDE_ACTIVITY_DESKTOP_JPG,
    SMART_ALERTS_SLIDE_ACTIVITY_MOBILE_WEBP,
    SMART_ALERTS_SLIDE_ACTIVITY_MOBILE_JPG,
    SMART_ALERTS_SLIDE_BARKING_DESKTOP_WEBP,
    SMART_ALERTS_SLIDE_BARKING_DESKTOP_JPG,
    SMART_ALERTS_SLIDE_BARKING_MOBILE_WEBP,
    SMART_ALERTS_SLIDE_BARKING_MOBILE_JPG,
    SMART_ALERTS_SLIDE_SELFIE_DESKTOP_WEBP,
    SMART_ALERTS_SLIDE_SELFIE_DESKTOP_JPG,
    SMART_ALERTS_SLIDE_SELFIE_MOBILE_WEBP,
    SMART_ALERTS_SLIDE_SELFIE_MOBILE_JPG,
    SMART_ALERTS_SLIDE_HOME_EMERGENCY_DESKTOP_WEBP,
    SMART_ALERTS_SLIDE_HOME_EMERGENCY_DESKTOP_JPG,
    SMART_ALERTS_SLIDE_HOME_EMERGENCY_MOBILE_WEBP,
    SMART_ALERTS_SLIDE_HOME_EMERGENCY_MOBILE_JPG,
    SMART_ALERTS_SLIDE_PERSON_DESKTOP_WEBP,
    SMART_ALERTS_SLIDE_PERSON_DESKTOP_JPG,
    SMART_ALERTS_SLIDE_PERSON_MOBILE_WEBP,
    SMART_ALERTS_SLIDE_PERSON_MOBILE_JPG,
} from 'config/imageConfigs/general';

import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import styles from './smartAlertStyle';
import { useTranslation } from 'next-i18next';

const useStyles = makeStyles(styles);


const slideList = [
    {
        alt: 'smart-alert-barking',
        srcDesktop: SMART_ALERTS_SLIDE_BARKING_DESKTOP_WEBP,
        fallbackDesktop: SMART_ALERTS_SLIDE_BARKING_DESKTOP_JPG,
        srcMobile: SMART_ALERTS_SLIDE_BARKING_MOBILE_WEBP,
        fallbackMobile: SMART_ALERTS_SLIDE_BARKING_MOBILE_JPG,
    },
    {
        alt: 'smart-alert-activity',
        srcDesktop: SMART_ALERTS_SLIDE_ACTIVITY_DESKTOP_WEBP,
        fallbackDesktop: SMART_ALERTS_SLIDE_ACTIVITY_DESKTOP_JPG,
        srcMobile: SMART_ALERTS_SLIDE_ACTIVITY_MOBILE_WEBP,
        fallbackMobile: SMART_ALERTS_SLIDE_ACTIVITY_MOBILE_JPG,
    },
    {
        alt: 'smart-alert-selfie',
        srcDesktop: SMART_ALERTS_SLIDE_SELFIE_DESKTOP_WEBP,
        fallbackDesktop: SMART_ALERTS_SLIDE_SELFIE_DESKTOP_JPG,
        srcMobile: SMART_ALERTS_SLIDE_SELFIE_MOBILE_WEBP,
        fallbackMobile: SMART_ALERTS_SLIDE_SELFIE_MOBILE_JPG,
    },
    {
        alt: 'smart-alert-home-emergency',
        srcDesktop: SMART_ALERTS_SLIDE_HOME_EMERGENCY_DESKTOP_WEBP,
        fallbackDesktop: SMART_ALERTS_SLIDE_HOME_EMERGENCY_DESKTOP_JPG,
        srcMobile: SMART_ALERTS_SLIDE_HOME_EMERGENCY_MOBILE_WEBP,
        fallbackMobile: SMART_ALERTS_SLIDE_HOME_EMERGENCY_MOBILE_JPG,
    },
    {
        alt: 'smart-alert-person',
        srcDesktop: SMART_ALERTS_SLIDE_PERSON_DESKTOP_WEBP,
        fallbackDesktop: SMART_ALERTS_SLIDE_PERSON_DESKTOP_JPG,
        srcMobile: SMART_ALERTS_SLIDE_PERSON_MOBILE_WEBP,
        fallbackMobile: SMART_ALERTS_SLIDE_PERSON_MOBILE_JPG,
    },
];

const SmartAlerts = (props) => {
    const { postContent } = props;
    const classes = useStyles();
    const theme = useTheme();
    const { t } = useTranslation()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const [currentSlide, setCurrentSlide] = useState(0);

    const dotList = [
        {
            index: 0,
            src: BARKING_YELLOW_ICON_SVG.src,
            text: t('common.smart_alert.alert_list.0.text'),
            alt: t('common.smart_alert.alert_list.0.text'),
        },
        {
            index: 1,
            src: ACTIVITY_YELLOW_ICON_SVG.src,
            text: t('common.smart_alert.alert_list.1.text'),
            alt: t('common.smart_alert.alert_list.1.alt'),
        },
        {
            index: 2,
            src: SELFIE_YELLOW_ICON_SVG.src,
            text: t('common.smart_alert.alert_list.2.text'),
            alt: t('common.smart_alert.alert_list.2.alt'),
        },
        {
            index: 3,
            src: HOME_EMERGENCY_RED_ICON_SVG.src,
            text: t('common.smart_alert.alert_list.3.text'),
            alt: t('common.smart_alert.alert_list.3.alt'),
        },
        {
            index: 4,
            src: PERSON_YELLOW_ICON_SVG.src,
            text: t('common.smart_alert.alert_list.4.text'),
            alt: t('common.smart_alert.alert_list.4.alt'),
        },
    ];

    const changeSlide = (index) => {
        setCurrentSlide(index);
    };

    const updateCurrentSlide = (index) => {
        if (currentSlide !== index) {
            setCurrentSlide(index);
        }
    };

    return (
        <VisibleSensorAnimation animation="grow">
            <div className={classes.root}>
                <div className={classes.contentContainer}>
                    <Grid container>
                        <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                            <div className={classes.title}>
                                {postContent.title}
                            </div>
                            <div className={classes.subtitle}>
                                {postContent.subtitle}
                            </div>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className={classes.indicatorContainer}>
                                {dotList.map((item) => {
                                    return (
                                        <Button
                                            key={item.text}
                                            role="button"
                                            onClick={() =>
                                                changeSlide(item.index)
                                            }
                                            onKeyDown={() =>
                                                changeSlide(item.index)
                                            }
                                            tabIndex={item.index}
                                            className={classes.button}
                                            disableFocusRipple
                                            disableRipple
                                            disableElevation
                                        >
                                            <div
                                                className={
                                                    classes.buttonContainer
                                                }
                                            >
                                                <div
                                                    className={
                                                        classes.buttonIcon
                                                    }
                                                    style={{
                                                        opacity:
                                                            currentSlide ===
                                                            item.index
                                                                ? '100%'
                                                                : '50%',
                                                    }}
                                                >
                                                    <Image
                                                        alt={item.alt}
                                                        src={item.src}
                                                        type="image/svg+xml"
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        classes.buttonText
                                                    }
                                                >
                                                    {item.text}
                                                </div>
                                            </div>
                                        </Button>
                                    );
                                })}
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Carousel
                    swipeable={false}
                    showArrows={false}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    selectedItem={currentSlide}
                    onChange={updateCurrentSlide}
                >
                    {slideList.map((item,index) => (
                        <div
                            className={classes.slide}
                            key={index}
                            style={{
                                backgroundImage: smDown
                                    ? `url(${item.srcMobile.src}), url(${item.fallbackMobile.src})`
                                    : `url(${item.srcDesktop.src}), url(${item.fallbackDesktop.src})`,
                            }}
                        />
                    ))}
                </Carousel>
            </div>
        </VisibleSensorAnimation>
    );
};

SmartAlerts.propTypes = {
    postContent: PropTypes.object.isRequired,
};

export default SmartAlerts;
