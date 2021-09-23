import React, { useState } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import ShopButton from '@/components/ShopButton';
import Image from '@/components/Image';
import {
    HOME_PHONE_VIEW_WEBP,
    HOME_PHONE_VIEW_PNG,
} from '@/config/imageConfigs/home';
import { useTranslation } from 'next-i18next';
import styles from './keyVisualStyle.js';

const useStyles = makeStyles(styles);


const KeyVisual = () => {
    const classes = useStyles();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('xs'));
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const postContent = {
        title: t('home.key_visual.title'),
        subtitle: t('home.key_visual.subtitle'),
        phoneView: {
            src: HOME_PHONE_VIEW_WEBP,
            fallback: HOME_PHONE_VIEW_PNG,
            alt: t('home.key_visual.phone_view_alt'),
        },
        watchVideo: t('home.key_visual.watch_video'),
    };

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
        <div className={classes.root}>
            <Grid container>
                <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                    <div className={classes.text}>
                        <div className={classes.title}>{postContent.title}</div>
                        <div className={classes.subtitle}>
                            {postContent.subtitle}
                        </div>
                        <div className={classes.playContainer}>
                            <div>
                                <Button
                                    className={classes.playButton}
                                    size="large"
                                    startIcon={
                                        <PlayCircleOutline
                                            className={classes.playIcon}
                                        />
                                    }
                                    onClick={watchVideo}
                                >
                                    {postContent.watchVideo}
                                </Button>
                                <Dialog
                                    onClose={handleClose}
                                    open={open}
                                    maxWidth="lg"
                                >
                                    <iframe
                                        title="kv-video-play"
                                        width={
                                            smDown
                                                ? '280'
                                                : lgUp
                                                ? '1020'
                                                : '560'
                                        }
                                        height={
                                            smDown
                                                ? '157'
                                                : lgUp
                                                ? '630'
                                                : '315'
                                        }
                                        src="https://www.youtube.com/embed/a47L1wlP_-E?enablejsapi=1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        autoPlay
                                        enablejsapi={1}
                                    />
                                </Dialog>
                            </div>
                        </div>
                        <div className={classes.shopContainer}>
                            <ShopButton className={classes.shopButton} />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.phoneContainer}>
                <Image
                    className={classes.phone}
                    src={postContent.phoneView}
                    fallback={postContent.phoneView.fallback}
                    alt={postContent.phoneView.alt}
                />
            </div>
        </div>
    );
};

export default KeyVisual;
