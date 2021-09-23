import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Video from '@/components/Video';
import VisibleSensorAnimation from '@/components/VisibleSensorAnimation';
import { useTranslation } from 'next-i18next';
import {
    HOME_ACTIVITY_ALERT_MP4,
    HOME_CLOUD_RECORDING_DESKTOP_MP4,
    HOME_CLOUD_RECORDING_MOBILE_MP4,
} from '@/config/imageConfigs/home';
import styles from './cloudRecordingStyle';

const useStyles = makeStyles(styles);

const CloudRecording = () => {
    const classes = useStyles();
    const theme = useTheme();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const { t } = useTranslation();

    const postContent = {
        name: t('home.cloud_recording.alt'),
        src: HOME_ACTIVITY_ALERT_MP4,
        phoneView: {
            src: {
                sm: HOME_CLOUD_RECORDING_DESKTOP_MP4,
                xs: HOME_CLOUD_RECORDING_MOBILE_MP4,
            },
        },
        title: t('home.cloud_recording.title'),
        subtitle: t('home.cloud_recording.subtitle'),
    };

    return (
        <VisibleSensorAnimation animation="grow">
            <div className={classes.root}>
                <Grid className={classes.containerGrid} container>
                    <Hidden smDown>
                        <Grid
                            className={classes.videoGrid}
                            item
                            xl={8}
                            lg={8}
                            md={8}
                        >
                            <Video
                                className={classes.video}
                                src={postContent.src}
                                title={postContent.name}
                                autoPlay
                                loop
                                muted
                                playsInline
                                width='auto'
                                height='100%'
                            />
                            <div className={classes.phoneViewContainer}>
                                <Video
                                    className={classes.phoneView}
                                    src={postContent.phoneView.src.sm}
                                    title={postContent.name}
                                    loop
                                    autoPlay
                                    muted
                                    playsInline
                                    width='auto'
                                    height='100%'
                                />
                            </div>
                        </Grid>
                    </Hidden>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <div className={classes.text}>
                            <div className={classes.title}>
                                {postContent.title}
                            </div>
                            <div className={classes.subtitle}>
                                {postContent.subtitle}
                            </div>
                        </div>
                    </Grid>
                    <Hidden mdUp>
                        <Grid
                            className={classes.videoGrid}
                            item
                            sm={12}
                            xs={12}
                        >
                            <Video
                                className={classes.video}
                                src={
                                    xsDown
                                        ? postContent.phoneView.src.xs
                                        : postContent.src
                                }
                                title={postContent.name}
                                autoplay
                                loop
                                muted
                                playsInline
                            />
                            {!xsDown && (
                                <div className={classes.phoneViewContainer}>
                                    <Video
                                        className={classes.phoneView}
                                        src={postContent.phoneView.src.sm}
                                        title={postContent.name}
                                        autoplay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                            )}
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        </VisibleSensorAnimation>
    );
};

export default CloudRecording;
