import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { useTranslation } from 'next-i18next';
import ShopButton from '@/components/ShopButton';
import Image from '@/components/Image';
import {
    FOUR_AND_HALF_STAR_ICON_SVG,
    BEST_SELLER_ICON_SVG,
    AMAZON_LOGO_PNG,
} from '@/config/imageConfigs/general';
import VisibleSensorAnimation from '@/components/VisibleSensorAnimation';
import styles from './bestSellerStyle.js';

const useStyles = makeStyles(styles);


const BestSeller = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const postContent = {
        rating: {
            alt: t('home.best_seller.rating.alt'),
            src: FOUR_AND_HALF_STAR_ICON_SVG,
            text: t('home.best_seller.rating.text'),
        },
        bestSeller: {
            src: BEST_SELLER_ICON_SVG,
            alt: t('home.best_seller.best_seller.alt'),
        },
        amazon: {
            src: AMAZON_LOGO_PNG,
            alt: t('home.best_seller.amazon.alt'),
        },
    };

    return (
        <VisibleSensorAnimation animation="grow">
            <div className={classes.root}>
                <Grid container>
                    <Grid item xl={4} lg={5} md={5} sm={5} xs={12}>
                        <div className={classes.content}>
                            <div className={classes.ratingContainer}>
                                <Image
                                    className={classes.ratingStars}
                                    src={postContent.rating.src}
                                    alt={postContent.rating.alt}
                                    type="image/svg+xml"
                                />
                                <Hidden only="sm">
                                    <div className={classes.ratingText}>
                                        {postContent.rating.text}
                                    </div>
                                </Hidden>
                            </div>
                            <Hidden mdUp xsDown>
                                <div className={classes.ratingText}>
                                    {postContent.rating.text}
                                </div>
                            </Hidden>
                            <div className={classes.bestSellerContainer}>
                                <Image
                                    className={classes.bestSellerIcon}
                                    src={postContent.bestSeller.src}
                                    alt={postContent.bestSeller.alt}
                                    type="image/svg+xml"
                                />
                            </div>
                            <div className={classes.amazonContainer}>
                                <Image
                                    className={classes.amazonLogo}
                                    src={postContent.amazon.src}
                                    alt={postContent.amazon.alt}
                                    type="image/png"
                                />
                            </div>
                            <div className={classes.shopContainer}>
                                <ShopButton className={classes.shopButton} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </VisibleSensorAnimation>
    );
};

export default BestSeller;
