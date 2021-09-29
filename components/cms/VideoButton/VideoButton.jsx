import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import styles from './videoButtonStyle.js';

const useStyles = makeStyles(styles);

const VideoButton = (props) => {
    const classes = useStyles();
    const { embedVideoLink, watchVideoText, center = false } = props;
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const watchVideo = () => {
        setOpen(true);
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div
            className={classes.root}
            style={{
                justifyContent: smDown
                    ? 'center'
                    : center
                    ? 'center'
                    : 'flex-start',
            }}
        >
            <Button
                className={classes.playButton}
                size="large"
                onClick={watchVideo}
            >
                <PlayCircleOutline className={classes.playIcon} />
                <div className={classes.playText}>{watchVideoText}</div>
            </Button>
            <Dialog onClose={handleClose} open={open} maxWidth="lg">
                <iframe
                    title="kv-video-play"
                    width={xsDown ? '280' : smDown ? '560' : '1020'}
                    height={xsDown ? '157' : smDown ? '315' : '630'}
                    src={`${embedVideoLink}?enablejsapi=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    autoPlay
                    enablejsapi={1}
                />
            </Dialog>
        </div>
    );
};

export default VideoButton;

VideoButton.propTypes = {
    embedVideoLink: PropTypes.string.isRequired,
    watchVideoText: PropTypes.node.isRequired,
    center: PropTypes.bool,
};
