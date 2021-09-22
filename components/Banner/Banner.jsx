import React, { lazy, Suspense } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import dynamic from 'next/dynamic'
import Image from 'components/Image';
import styles from './bannerStyle';

const Carousel = dynamic(() => import('react-responsive-carousel').then((RRC) => RRC.Carousel), {
  ssr: false,
})

const useStyles = makeStyles(styles);

const BANNER_CONTENT = {
    Desktop: (
        <div style={{ fontWeight: 800 }}>
            NEW! Get Furbo Dog Camera + Furbo Dog Nanny for Only $9.99/Month.{' '}
            <span style={{ color: '#1e7bac', textDecoration: 'underline' }}>
                LEARN MORE
            </span>
        </div>
    ),
    Mobile: (
        <div>
            <div
                style={{
                    fontWeight: 'bold',
                    height: 'auto',
                    lineHeight: 'normal',
                }}
            >
                #1 Best Seller on Amazon
            </div>
            <div> 2 Day Free Shipping. Lifetime Warranty.</div>
        </div>
    ),
};

const BANNER_IMAGE = {
    Left: null,
    Right: null,
};
const BannerContent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                {BANNER_IMAGE.Left && (
                    <div className={classes.leftImg}>
                        <Image
                            alt="banner-left"
                            src={BANNER_IMAGE.Left}
                            type="image/svg+xml"
                            loading="eager"
                        />
                    </div>
                )}
                <span className={classes.bannerContent}>
                    {smDown ? BANNER_CONTENT.Mobile : BANNER_CONTENT.Desktop}
                </span>
                {BANNER_IMAGE.Right && (
                    <div className={classes.rightImg}>
                        <Image
                            alt="banner-right"
                            src={BANNER_IMAGE.Right}
                            type="image/svg+xml"
                            loading="eager"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

const Banner = () => {
    return (
        // <Suspense fallback={<BannerContent />}>
            <Carousel
                swipeable={false}
                showThumbs={false}
                showArrows={false}
                infiniteLoop={false}
                showIndicators={false}
                showStatus={false}
                autoplay={false}
                transitionTime={0}
            >
                <BannerContent />
            </Carousel>
        /* </Suspense> */
    );
};

export default Banner;
