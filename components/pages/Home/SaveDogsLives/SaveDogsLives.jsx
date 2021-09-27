import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Video from '@/components/Video';
import {
    SAVE_LIFE_FIRE_1_MP4,
    SAVE_LIFE_FIRE_2_MP4,
    SAVE_LIFE_FIRE_3_MP4,
} from '@/config/imageConfigs/saveLives';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import styles from './saveDogsLivesStyle';

const useStyles = makeStyles(styles);

const SaveDogsLives = () => {
    const classes = useStyles();
    const location = useRouter();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const centerSlidePercentage = xsDown ? 100 : smDown ? 50 : 33;
    const { t, i18n } = useTranslation();
    // const { countUp, start } = useCountUp({
    //     ref: countUpRef,
    //     start: 0,
    //     end: 1001,
    //     duration: 5,
    //     redraw: true,
    //     delay: 10,
    // });

    const onVisibilityChange = (isVisible) => {
        // if (isVisible) {
        //     start();
        // }
    };

    const postContent = {
        title: t('home.save_dogs_lives.title'),
        counterTitle: t('home.save_dogs_lives.dogs_saved'),
        subtitle: t('home.save_dogs_lives.subtitle'),
        slide: [
            {
                video: {
                    src: SAVE_LIFE_FIRE_2_MP4,
                    autoplay: true,
                    playbackRate: 1,
                    controls: false,
                },
                title: t('home.save_dogs_lives.slide.0.title'),
                subtitle: t(
                    'home.save_dogs_lives.slide.0.subtitle',
                ),
                author: t('home.save_dogs_lives.slide.0.author'),
                redirect: `/${i18n.language}/pages/save-dog-lives`,
            },
            {
                video: {
                    src: `${SAVE_LIFE_FIRE_3_MP4}#t=0.001`,
                    autoplay: false,
                    playbackRate: 1,
                    controls: true,
                },
                title: t('home.save_dogs_lives.slide.1.title'),
                subtitle: t(
                    'home.save_dogs_lives.slide.1.subtitle',
                ),
                author: t('home.save_dogs_lives.slide.1.author'),
                redirect: `/${i18n.language}/pages/save-dog-lives`,
            },
            {
                video: {
                    src: SAVE_LIFE_FIRE_1_MP4,
                    autoplay: true,
                    playbackRate: 0.25,
                    controls: false,
                },
                title: t('home.save_dogs_lives.slide.2.title'),
                subtitle: t(
                    'home.save_dogs_lives.slide.2.subtitle',
                ),
                author: t('home.save_dogs_lives.slide.2.author'),
                redirect: `/${i18n.language}/pages/save-dog-lives`,
            },
        ],
    };

    return (
        <>
        <VisibleSensorAnimation animation="grow">
            <div className={classes.root}>
                <div className={classes.title}>{postContent.title}</div>
                <div className={classes.counterContainer}>
                    <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                        <div className={classes.counter}>
                            <div
                                className={classes.counterBox}
                                style={{ color: '#a1a1a1' }}
                            >
                                0
                            </div>
                            <div className={classes.counterBox}>
                                {/*Math.floor(countUpRef.current / 1000) % 10||*/1}
                            </div>
                            <div className={classes.counterBox}>
                                {/*Math.floor(countUpRef.current / 100) % 10||*/0}
                            </div>
                            <div className={classes.counterBox}>
                                {/*Math.floor(countUpRef.current / 10) % 10||*/0}
                            </div>
                            <div
                                className={classes.counterBox}
                                style={{ color: '#cc684a' }}
                            >
                                {/*countUpRef.current % 10||*/1}
                            </div>
                        </div>
                    </VisibilitySensor>
                    <div className={classes.counterText}>
                        {postContent.counterTitle}
                    </div>
                </div>
                <div className={classes.subTitle}>
                    <span>{postContent.subtitle}</span>
                </div>
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
                        {postContent.slide.map((item,index) => (
                            <div className={classes.slide} key={index}>
                                <Card className={classes.card} elevation={5}>
                                    <div>
                                        <Video
                                            className={classes.cardMedia}
                                            src={item.video.src}
                                            loop
                                            autoPlay={item.video.autoplay}
                                            muted
                                            playsInline
                                            playbackrate={
                                                item.video.playbackRate
                                            }
                                            width='100%'
                                            height='auto'
                                            controls={item.video.controls}
                                        />
                                    </div>
                                    <CardContent
                                        className={classes.cardContent}
                                    >
                                        <div className={classes.cardTitle}>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className={classes.cardSubtitle}>
                                            {item.subtitle}{' '}
                                            <Link
                                                href={{
                                                    pathname: item.redirect,
                                                    query: location.query,
                                                }}
                                                passHref
                                            >
                                                <div
                                                    className={
                                                        classes.cardReadMore
                                                    }
                                                >
                                                    ...
                                                    {t(
                                                        'common.read_more',
                                                    )}
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={classes.cardName}>
                                            {item.author}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </VisibleSensorAnimation>
        </>
    );
};

export default SaveDogsLives;
