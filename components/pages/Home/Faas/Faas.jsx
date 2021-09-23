import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Image from '@/components/Image';
import {
    LOW_COST_ICON_SVG,
    WARRANTY_ICON_SVG,
    CANCEL_ICON_SVG,
    SUPPORT_ICON_SVG,
    NEW_ICON_SVG,
} from '@/config/imageConfigs/general';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import styles from './faasStyle';

const useStyles = makeStyles(styles);
const Faas = () => {
    const classes = useStyles();
    const location = useRouter();
    const { t, i18n } = useTranslation();

    const postContent = {
        title: t('home.faas.title'),
        subtitle: t('home.faas.subtitle'),
        services: [
            {
                alt: t('home.faas.services.low_upfront_cost.alt'),
                text: t(
                    'home.faas.services.low_upfront_cost.text',
                ),
                src: LOW_COST_ICON_SVG.src,
            },
            {
                alt: t('home.faas.services.cancel_anytime.alt'),
                text: t('home.faas.services.cancel_anytime.text'),
                src: CANCEL_ICON_SVG.src,
            },
            {
                alt: t('home.faas.services.lifetime_warranty.alt'),
                text: t(
                    'home.faas.services.lifetime_warranty.text',
                ),
                src: WARRANTY_ICON_SVG.src,
            },
            {
                alt: t('home.faas.services.24hour_support.alt'),
                text: t('home.faas.services.24hour_support.text'),
                src: SUPPORT_ICON_SVG.src,
            },
        ],
        button: {
            text: t('common.learn_more'),
            to: `/${i18n.language}/products/furbo-nanny-cam-bundle`,
            onClick: () => {},
        },
    };

    return (
        <VisibleSensorAnimation animation="grow">
            <div className={classes.root}>
                <Grid container>
                    <Hidden smDown>
                        <Grid item xl={5} lg={5} md={5} />
                    </Hidden>
                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                        <div className={classes.text}>
                            <div className={classes.title}>
                                {postContent.title}
                                <Image
                                    className={classes.new}
                                    alt="new-icon"
                                    src={NEW_ICON_SVG.src}
                                    type="image/svg+xml"
                                />
                            </div>
                            <div className={classes.subtitle}>
                                {postContent.subtitle}
                            </div>
                            <div className={classes.serviceContainer}>
                                {postContent.services.map((item) => (
                                    <div className={classes.services} key={item.text}>
                                        <div className={classes.serviceText}>
                                            {item.text}
                                        </div>
                                        <Image
                                            className={classes.serviceIcons}
                                            alt={item.alt}
                                            src={item.src}
                                            type="image/svg+xml"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className={classes.learnMoreContainer}>
                                <Link
                                    href={{
                                        pathname: postContent.button.to,
                                        query: location.query,
                                    }}
                                    passHref>
                                    <Button
                                        className={classes.learnMoreButton}
                                        onClick={postContent.button.onClick()}
                                    >
                                        {postContent.button.text}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </VisibleSensorAnimation>
    );
};

export default Faas;
