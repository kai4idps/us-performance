import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Image from '@/components/Image';
import Video from '@/components/Video';
import { useTranslation } from 'next-i18next';
import {
    HOME_CATCH_TREATS_MP4,
    HOME_CORGI_BARKING_WEBP,
    HOME_CORGI_BARKIN_JPG,
    HOME_EMERGENCY_ALERT_WEBP,
    HOME_EMERGENCY_ALERT_JPG,
} from '@/config/imageConfigs/home';
import { PATH_SHORT_SVG, PATH_LONG_SVG } from '@/config/imageConfigs/general';
import VisibleSensorAnimation from '@/components/VisibleSensorAnimation';
import styles from './introductionStyle';

const useStyles = makeStyles(styles);

const Intro = () => {
    const classes = useStyles();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const centerSlidePercentage = xsDown ? 100 : smDown ? 50 : 33;
    const { t } = useTranslation();

    const postContent = {
        title: t('home.intro.title'),
        introSlides: [
            {
                alt: t('home.intro.intro_slides.0.alt'),
                src: HOME_CORGI_BARKING_WEBP.src,
                fallback: HOME_CORGI_BARKIN_JPG.src,
                type: 'image',
                title: t('home.intro.intro_slides.0.title'),
                content: t('home.intro.intro_slides.0.content'),
            },
            {
                alt: t('home.intro.intro_slides.1.alt'),
                src: HOME_EMERGENCY_ALERT_WEBP.src,
                fallback: HOME_EMERGENCY_ALERT_JPG.src,
                type: 'image',
                title: t('home.intro.intro_slides.1.title'),
                content: t('home.intro.intro_slides.1.content'),
            },
            {
                alt: t('home.intro.intro_slides.2.alt'),
                src: HOME_CATCH_TREATS_MP4,
                type: 'video',
                title: t('home.intro.intro_slides.2.title'),
                content: t('home.intro.intro_slides.2.content'),
            },
        ],
    };
    
    return (
        <div className={classes.root}>
             <div className={classes.title}>
                {postContent.title}
                <Hidden smDown>
                    <Image
                        className={classes.path}
                        alt="cute-arrow"
                        src={PATH_SHORT_SVG.src}
                        type="image/svg+xml"
                    />
                </Hidden>
                <Hidden mdUp>
                    <Image
                        className={classes.path}
                        alt="cute-arrow"
                        src={PATH_LONG_SVG.src}
                        type="image/svg+xml"
                    />
                </Hidden>
            </div>
            <VisibleSensorAnimation animation="grow">
                <div className={classes.carouselContainer}>
                    <Carousel
                        swipeable={true}
                        showArrows={true}
                        showThumbs={false}
                        showIndicators={false}
                        showStatus={false}
                        infiniteLoop={true}
                        centerMode={true}
                        centerSlidePercentage={centerSlidePercentage}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev &&
                            smDown && (
                                <IconButton
                                    variant="contained"
                                    className={classes.arrow}
                                    aria-label="arrow-next"
                                    onClick={onClickHandler}
                                    title={label}
                                >
                                    <KeyboardArrowLeft fontSize="medium" />
                                </IconButton>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext &&
                            smDown && (
                                <IconButton
                                    variant="contained"
                                    className={classes.arrow}
                                    aria-label="arrow-next"
                                    onClick={onClickHandler}
                                    title={label}
                                    style={{ right: 0 }}
                                >
                                    <KeyboardArrowRight fontSize="medium" />
                                </IconButton>
                            )
                        }
                    >
                        {postContent.introSlides.map((item, index) => (
                            <div className={classes.slide} key={index}>
                                <Card className={classes.card} elevation={5}>
                                    {item.type === 'image' && (
                                        <Image
                                            className={classes.cardMedia}
                                            alt={item.alt}
                                            src={item.src}
                                            fallback={item.fallback}
                                        />
                                    )}
                                    {item.type === 'video' && (
                                        <div>
                                            <Video
                                                className={classes.cardMedia}
                                                src={item.src}
                                                alt={item.alt}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                width='100%'
                                            />
                                        </div>
                                    )}
                                    <CardContent>
                                        <div className={classes.cardContent}>
                                            <span
                                                style={{
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {item.title}
                                            </span>{' '}
                                            {item.content}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </VisibleSensorAnimation> 
        </div>
    );
};

export default Intro;
