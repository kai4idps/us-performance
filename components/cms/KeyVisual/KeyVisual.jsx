import React from 'react';
import { RichText } from 'prismic-reactjs';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { isEmpty } from '@/utils/helpers';
import Image from '@/components/Image';
import VideoButton from '@/components/cms/VideoButton';
import ShopButton from '@/components/cms/ShopButton';

import styles from './keyVisualStyle.js';

const useStyles = makeStyles(styles);

const renderSlice = (slice) => {
    if (slice.type === 'video_button') {
        return (
            <VideoButton
                embedVideoLink={`${slice.data.video_link.embed_url.replace(
                    'watch?v=',
                    'embed/',
                )}?enablejsapi=1`}
                watchVideoText={slice.data.watch_video_text}
            />
        );
    } else if (slice.type === 'shop_button') {
        return (
            <ShopButton
                shopButtonText={slice.data.shop_button_text}
                center={slice.data.center}
            />
        );
    } else {
        return null;
    }
};

const KeyVisual = () => {
    const classes = useStyles();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const campaign = useSelector((state) => state.prismic.campaign);

    if (isEmpty(campaign)) {
        return <div className={classes.root} />;
    }

    return (
        <div
            className={classes.root}
            style={{
                backgroundImage: smDown
                    ? `url(${campaign.key_visual_image_mobile.url})`
                    : `url(${campaign.key_visual_image_desktop.url})`,
            }}
        >
            <Grid container>
                <Grid item md={7} sm={12}>
                    <div className={classes.text}>
                        <div className={classes.title}>
                            {RichText.render(campaign.title)}
                        </div>
                        <div className={classes.subtitle}>
                            {RichText.render(campaign.subtitle)}
                        </div>
                        <>
                            {campaign.content.map((slice) =>
                                renderSlice(slice.content_array),
                            )}
                        </>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.centerImageContainer}>
                <Image
                    className={classes.centerImage}
                    src={campaign.center_image.url}
                    alt={campaign.center_image.alt}
                />
            </div>
        </div>
    );
};

export default KeyVisual;
