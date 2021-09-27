import React from 'react';
import parse from 'html-react-parser';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Image from '@/components/Image';
import {
    HOME_RECOMMEND_VET_WEBP,
    HOME_RECOMMEND_VET_JPG,
    HOME_RECOMMEND_TRAINER_WEBP,
    HOME_RECOMMEND_TRAINER_JPG,
} from '@/config/imageConfigs/home';
import { useTranslation } from 'next-i18next';
import VisibleSensorAnimation from '@/components/VisibleSensorAnimation';
import styles from './recommendStyle.js';

const useStyles = makeStyles(styles);
const Recommend = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const postContent = {
        title: parse(t('home.recommended.title')),
        card: [
            {
                alt: t('home.recommended.card.0.alt'),
                src: HOME_RECOMMEND_VET_WEBP,
                fallback: HOME_RECOMMEND_VET_JPG,
                text: t('home.recommended.card.0.text'),
                boldText: t('home.recommended.card.0.bold_text'),
                author: t('home.recommended.card.0.author'),
            },
            {
                alt: t('home.recommended.card.1.alt'),
                src: HOME_RECOMMEND_TRAINER_WEBP,
                fallback: HOME_RECOMMEND_TRAINER_JPG,
                boldText: t('home.recommended.card.1.text'),
                text: t('home.recommended.card.1.bold_text'),
                author: t('home.recommended.card.1.author'),
            },
        ],
    };

    return (
        <div className={classes.root}>
            <div className={classes.title}>{postContent.title}</div>
            <Grid container>
                <VisibleSensorAnimation animation="grow">
                    <Grid
                        item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={12}
                        xs={12}
                        className={classes.vetContainer}
                    >
                        <Card className={classes.card} elevation={5}>
                            <Image
                                className={classes.cardMedia}
                                alt={postContent.card[0].alt}
                                src={postContent.card[0].src}
                                fallback={postContent.card[0].fallback}
                            />
                            <CardContent className={classes.cardContent}>
                                <span>{postContent.card[0].text}</span>
                                <span style={{ fontWeight: '600' }}>
                                    {' '}
                                    {postContent.card[0].boldText}
                                </span>
                                <div style={{ marginTop: '16px' }}>
                                    {postContent.card[0].author}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </VisibleSensorAnimation>
                <VisibleSensorAnimation animation="grow">
                    <Grid
                        item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={12}
                        xs={12}
                        className={classes.trainerContainer}
                    >
                        <Card className={classes.card} elevation={5}>
                            <Image
                                className={classes.cardMedia}
                                alt={postContent.card[1].alt}
                                src={postContent.card[1].src}
                                fallback={postContent.card[1].fallback}
                            />
                            <CardContent className={classes.cardContent}>
                                <span style={{ fontWeight: '600' }}>
                                    {postContent.card[1].boldText}
                                </span>
                                <span> {postContent.card[1].text}</span>
                                <div style={{ marginTop: '16px' }}>
                                    {postContent.card[1].author}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </VisibleSensorAnimation>
            </Grid>
        </div>
    );
};

export default Recommend;
