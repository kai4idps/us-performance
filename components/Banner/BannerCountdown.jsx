/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'components/Image';
import { isEmpty } from 'utils/helpers';
import styles from './bannerStyle';

const useStyles = makeStyles(styles);

const BannerCountdown = () => {
    const classes = useStyles();
    const campaign = useSelector((state) => state.prismic.lcpImage);
    // const campaign = useSelector((state) => state.prismic.campaign);
    const [timeLeft, setTimeLeft] = useState({});

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const target = new Date(campaign.countdown_date).getTime();
        const difference = target - now;
        const result = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
        return result;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (isEmpty(timeLeft)) {
        return <div className={classes.container} />;
    }

    if (campaign.banner_type === 'Sales End Countdown') {
        return (
            <div className={classes.root}>
                <div
                    className={classes.container}
                    style={{
                        backgroundColor: campaign.banner_background_color,
                        color: campaign.banner_font_color,
                    }}
                >
                    {!isEmpty(campaign.banner_image_left) && (
                        <div className={classes.leftImg}>
                            <Image
                                alt={campaign.banner_image_left.alt}
                                src={campaign.banner_image_left.url}
                                type="image/svg+xml"
                                loading="eager"
                            />
                        </div>
                    )}
                    <div
                        style={{
                            flexDirection: 'column',
                        }}
                    >
                        <span className={classes.bannerContent}>
                            {RichText.render(
                                campaign.sales_end_countdown_text_content,
                            )}
                        </span>
                        <span
                            className={classes.bannerContent}
                            style={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <span className={classes.time}>
                                <div className={classes.timeDigit}>
                                    {timeLeft.days * 24 + timeLeft.hours}
                                </div>
                                <div className={classes.timeWord}>
                                    {campaign.hours_text}
                                </div>
                            </span>
                            <span className={classes.colon}>:</span>
                            <span className={classes.time}>
                                <div className={classes.timeDigit}>
                                    {timeLeft.minutes}
                                </div>
                                <div className={classes.timeWord}>
                                    {campaign.minutes_text}
                                </div>
                            </span>
                            <span className={classes.colon}>:</span>
                            <span className={classes.time}>
                                <div className={classes.timeDigit}>
                                    {timeLeft.seconds}
                                </div>
                                <div className={classes.timeWord}>
                                    {campaign.seconds_text}
                                </div>
                            </span>
                        </span>
                    </div>
                    {!isEmpty(campaign.banner_image_right) && (
                        <div className={classes.rightImg}>
                            <Image
                                alt={campaign.banner_image_right.alt}
                                src={campaign.banner_image_right.url}
                                type="image/svg+xml"
                                loading="eager"
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }

    if (campaign.banner_type === 'Unit Countdown') {
        return (
            <div className={classes.root}>
                <div
                    className={classes.container}
                    style={{
                        backgroundColor: campaign.banner_background_color,
                        color: campaign.banner_font_color,
                    }}
                >
                    {!isEmpty(campaign.banner_image_left) && (
                        <div className={classes.leftImg}>
                            <Image
                                alt={campaign.banner_image_left.alt}
                                src={campaign.banner_image_left.url}
                                type="image/svg+xml"
                                loading="eager"
                            />
                        </div>
                    )}
                    <span>
                        <span className={classes.bannerContent}>
                            {RichText.render(
                                campaign.unit_countdown_text_content,
                            )}
                        </span>
                        <span
                            className={classes.bannerContent}
                            style={{ flexDirection: 'row' }}
                        >
                            {campaign.units_remaining_text.split('{units}')[0]}
                            <span className={classes.units}>
                                <span className={classes.unitsDigit}>9</span>
                            </span>
                            <span
                                className={classes.units}
                                style={{ marginLeft: 0 }}
                            >
                                <span className={classes.unitsDigit}>9</span>
                            </span>
                            {campaign.units_remaining_text.split('{units}')[1]}
                        </span>
                    </span>
                    {!isEmpty(campaign.banner_image_right) && (
                        <div className={classes.rightImg}>
                            <Image
                                alt={campaign.banner_image_right.alt}
                                src={campaign.banner_image_right.url}
                                type="image/svg+xml"
                                loading="eager"
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return null;
};

export default BannerCountdown;
