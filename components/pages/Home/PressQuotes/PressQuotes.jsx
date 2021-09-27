import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Image from '@/components/Image';
import {
    PRESS_BUZZFEED_ICON_WEBP,
    PRESS_BUZZFEED_ICON_JPG,
    PRESS_BUZZFEED_QUOTE_WEBP,
    PRESS_BUZZFEED_QUOTE_JPG,
    PRESS_ELLEN_ICON_WEBP,
    PRESS_ELLEN_ICON_JPG,
    PRESS_ELLEN_QUOTE_WEBP,
    PRESS_ELLEN_QUOTE_JPG,
    PRESS_INSTYLE_ICON_WEBP,
    PRESS_INSTYLE_ICON_JPG,
    PRESS_INSTYLE_QUOTE_WEBP,
    PRESS_INSTYLE_QUOTE_JPG,
    PRESS_MASHABLE_ICON_WEBP,
    PRESS_MASHABLE_ICON_JPG,
    PRESS_MASHABLE_QUOTE_WEBP,
    PRESS_MASHABLE_QUOTE_JPG,
    PRESS_TODAY_ICON_WEBP,
    PRESS_TODAY_ICON_JPG,
    PRESS_TODAY_QUOTE_WEBP,
    PRESS_TODAY_QUOTE_JPG,
    PRESS_WIRED_ICON_WEBP,
    PRESS_WIRED_ICON_JPG,
    PRESS_WIRED_QUOTE_WEBP,
    PRESS_WIRED_QUOTE_JPG,
} from '@/config/imageConfigs/press';
import VisibleSensorAnimation from '@/components/VisibleSensorAnimation';
import styles from './pressQuotesStyle';

const useStyles = makeStyles(styles);
const dotList = [
    {
        index: 0,
        src: PRESS_ELLEN_ICON_WEBP,
        fallback: PRESS_ELLEN_ICON_JPG,
        text: 'ellen-icon',
    },
    {
        index: 1,
        src: PRESS_WIRED_ICON_WEBP,
        fallback: PRESS_WIRED_ICON_JPG,
        text: 'wired-icon',
    },
    {
        index: 2,
        src: PRESS_BUZZFEED_ICON_WEBP,
        fallback: PRESS_BUZZFEED_ICON_JPG,
        text: 'buzzfeed-icon',
    },
    {
        index: 3,
        src: PRESS_MASHABLE_ICON_WEBP,
        fallback: PRESS_MASHABLE_ICON_JPG,
        text: 'mashable-icon',
    },
    {
        index: 4,
        src: PRESS_TODAY_ICON_WEBP,
        fallback: PRESS_TODAY_ICON_JPG,
        text: 'today-icon',
    },
    {
        index: 5,
        src: PRESS_INSTYLE_ICON_WEBP,
        fallback: PRESS_INSTYLE_ICON_JPG,
        text: 'instyle-icon',
    },
];
const slideList = [
    {
        index: 0,
        src: PRESS_ELLEN_QUOTE_WEBP,
        fallback: PRESS_ELLEN_QUOTE_JPG,
        alt: 'ellen-quote',
        text: 'The #1 gift on every pet lover’s wishlist. Furbo is so cool!',
    },
    {
        index: 1,
        src: PRESS_WIRED_QUOTE_WEBP,
        fallback: PRESS_WIRED_QUOTE_JPG,
        alt: 'wired-quote',
        text: 'Gorgeous. Simple & easy to use.',
    },
    {
        index: 2,
        src: PRESS_BUZZFEED_QUOTE_WEBP,
        fallback: PRESS_BUZZFEED_QUOTE_JPG,
        alt: 'buzzfeed-quote',
        text: 'Why didn’t I buy this sooner?',
    },
    {
        index: 3,
        src: PRESS_MASHABLE_QUOTE_WEBP,
        fallback: PRESS_MASHABLE_QUOTE_JPG,
        alt: 'mashable-quote',
        text: 'An absolute Must-Have for your furry friend.',
    },
    {
        index: 4,
        src: PRESS_TODAY_QUOTE_WEBP,
        fallback: PRESS_TODAY_QUOTE_JPG,
        alt: 'today-quote',
        text: 'I’m convinced Furbo has improved my mental health.',
    },
    {
        index: 5,
        src: PRESS_INSTYLE_QUOTE_WEBP,
        fallback: PRESS_INSTYLE_QUOTE_JPG,
        alt: 'instyle-quote',
        text: 'The best gift for pet lovers!',
    },
];

const PressQuote = () => {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);

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
                <div className={classes.carouselContainer}>
                    <Carousel
                        swipeable={true}
                        showArrows={true}
                        showThumbs={false}
                        showIndicators={false}
                        showStatus={false}
                        infiniteLoop={true}
                        centerMode={false}
                        autoplay={true}
                        interval={3000}
                        selectedItem={currentSlide}
                        onChange={updateCurrentSlide}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
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
                            hasNext && (
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
                        {slideList.map((item, index) => (
                            <div className={classes.slide} key={index}>
                                <div className={classes.quoteContainer}>
                                    <Hidden smDown>
                                        <div
                                            className={
                                                classes.quotationMarkLeft
                                            }
                                        >
                                            “
                                        </div>
                                        <div className={classes.quote}>
                                            {item.text}
                                        </div>
                                        <div
                                            className={
                                                classes.quotationMarkRight
                                            }
                                        >
                                            ”
                                        </div>
                                    </Hidden>
                                    <Hidden mdUp>
                                        <Image
                                            style={{
                                                height: 'auto',
                                                width: '100%',
                                            }}
                                            src={item.src}
                                            fallback={item.fallback}
                                            alt={item.alt}
                                        />
                                    </Hidden>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className={classes.indicatorContainer}>
                    {dotList.map((item) => {
                        return (
                            <>
                                <Hidden smDown>
                                    <Button
                                        key={item.text}
                                        role="button"
                                        onClick={() => changeSlide(item.index)}
                                        onKeyDown={() =>
                                            changeSlide(item.index)
                                        }
                                        tabIndex={item.index}
                                        className={classes.button}
                                    >
                                        <div
                                            className={classes.buttonIcon}
                                            style={{
                                                filter:
                                                    currentSlide === item.index
                                                        ? 'none'
                                                        : 'grayscale(100%)',
                                                opacity:
                                                    currentSlide === item.index
                                                        ? '100%'
                                                        : '40%',
                                            }}
                                        >
                                            <Image
                                                alt={item.text}
                                                src={item.src}
                                                fallback={item.fallback}
                                            />
                                        </div>
                                    </Button>
                                </Hidden>
                                <Hidden mdUp>
                                    <IconButton
                                        className={classes.button}
                                        variant="contained"
                                        size="small"
                                        role="button"
                                        onClick={() => changeSlide(item.index)}
                                        onKeyDown={() =>
                                            changeSlide(item.index)
                                        }
                                        tabIndex={item.index}
                                        style={{
                                            opacity:
                                                currentSlide === item.index
                                                    ? '100%'
                                                    : '30%',
                                        }}
                                    />
                                </Hidden>
                            </>
                        );
                    })}
                </div>
            </div>
        </VisibleSensorAnimation>
    );
};

export default PressQuote;
