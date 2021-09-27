import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styles from './scrollToTopButtonStyle';

const useStyles = makeStyles(styles);

const transitionDuration = {
    enter: 500,
    exit: 500,
};

const ScrollToTopButton = ({ positionToScroll }) => {
    const classes = useStyles();
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={classes.root}>
            <Zoom
                in={scrollPosition > positionToScroll}
                timeout={transitionDuration}
                style={{
                    transitionDelay: `${
                        scrollPosition > positionToScroll
                            ? transitionDuration.exit
                            : 0
                    }ms`,
                }}
                unmountOnExit
            >
                <Fab
                    onClick={scrollTop}
                    aria-label="Scroll to Top"
                    className={classes.fab}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Zoom>
        </div>
    );
};

ScrollToTopButton.propTypes = {
    positionToScroll: PropTypes.number.isRequired,
};

export default ScrollToTopButton;
