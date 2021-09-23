import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import Image from '@/components/Image';
import {
    HOME_VET_APPROVE_SVG,
    HOME_CLACK_SVG,
    HOME_FURBO_CAM_WEBP,
    HOME_FURBO_CAM_JPG,
    // HOME_GENERIC_CAM_WEBP,
    HOME_GENERIC_CAM_JPG,
} from '@/config/imageConfigs/home';
import {
    CLOUD_RECORDING_WHITE_ICON_SVG,
    DOGGIE_DIARY_WHITE_ICON_SVG,
    ACTIVITY_WHITE_ICON_SVG,
    BARKING_WHITE_ICON_SVG,
    SELFIE_WHITE_ICON_SVG,
    HOME_EMERGENCY_WHITE_ICON_SVG,
    PERSON_WHITE_ICON_SVG,
    SICK_WHITE_ICON_SVG,
} from 'config/imageConfigs/general';
import styles from './designedForDogsStyle.js';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

const featureRow = (src, alt, title, subtitle, furboCam, securityCam) => {
    return { src, alt, title, subtitle, furboCam, securityCam };
};

const useStyles = makeStyles(styles);
const DesignedForDogs = () => {
    const classes = useStyles();
    const location = useRouter();
    const language = useSelector((state) => state.language.code);
    const { t } = useTranslation();
    // #region columnDefs
    const postContent = {
        title: t('home.designed_for_dogs.title'),
        rows: [
            featureRow(
                HOME_VET_APPROVE_SVG,
                t('home.designed_for_dogs.row.0.alt'),
                t('home.designed_for_dogs.row.0.title'),
                t('home.designed_for_dogs.row.0.subtitle'),
                true,
                false,
            ),
            featureRow(
                HOME_CLACK_SVG,
                t('home.designed_for_dogs.row.1.alt'),
                t('home.designed_for_dogs.row.1.title'),
                t('home.designed_for_dogs.row.1.subtitle'),
                true,
                false,
            ),
            featureRow(
                CLOUD_RECORDING_WHITE_ICON_SVG,
                t('home.designed_for_dogs.row.2.alt'),
                t('home.designed_for_dogs.row.2.title'),
                t('home.designed_for_dogs.row.2.subtitle'),
                true,
                false,
            ),
            featureRow(
                DOGGIE_DIARY_WHITE_ICON_SVG,
                t('home.designed_for_dogs.row.3.alt'),
                t('home.designed_for_dogs.row.3.title'),
                t('home.designed_for_dogs.row.3.subtitle'),
                true,
                false,
            ),
            featureRow(
                ACTIVITY_WHITE_ICON_SVG,
                t('home.designed_for_dogs.row.4.alt'),
                t('home.designed_for_dogs.row.4.title'),
                t('home.designed_for_dogs.row.4.subtitle'),
                true,
                false,
            ),
            featureRow(
                SELFIE_WHITE_ICON_SVG,
                t('home.designed_for_dogs.row.5.alt'),
                t('home.designed_for_dogs.row.5.title'),
                t('home.designed_for_dogs.row.5.subtitle'),
                true,
                false,
            ),
            featureRow(
                PERSON_WHITE_ICON_SVG,
                t('home.designed_for_dogs.row.6.alt'),
                t('home.designed_for_dogs.row.6.title'),
                t('home.designed_for_dogs.row.6.subtitle'),
                true,
                false,
            ),
            featureRow(
                BARKING_WHITE_ICON_SVG,
                t('home.designed_for_dogs.row.7.alt'),
                t('home.designed_for_dogs.row.7.title'),
                t('home.designed_for_dogs.row.7.subtitle'),
                true,
                false,
            ),
            featureRow(
                HOME_EMERGENCY_WHITE_ICON_SVG,
                t('home.designed_for_dogs.row.8.alt'),
                t('home.designed_for_dogs.row.8.title'),
                t('home.designed_for_dogs.row.8.subtitle'),
                true,
                false,
            ),
            featureRow(
                SICK_WHITE_ICON_SVG,
                t('home.designed_for_dogs.row.9.alt'),
                t('home.designed_for_dogs.row.9.title'),
                t('home.designed_for_dogs.row.9.subtitle'),
                true,
                false,
            ),
        ],
        column: [
            {
                src: HOME_FURBO_CAM_WEBP.src,
                fallback: HOME_FURBO_CAM_JPG.src,
                alt: t('home.designed_for_dogs.column.0.alt'),
                title: t('home.designed_for_dogs.column.0.title'),
            },
            {
                src: HOME_GENERIC_CAM_JPG,
                fallback: HOME_GENERIC_CAM_JPG,
                alt: t('home.designed_for_dogs.column.1.alt'),
                title: t('home.designed_for_dogs.column.1.title'),
            },
        ],
        button: {
            text: t('common.learn_more'),
            to: '/products/designed-for-dogs',
            onClick: () => {},
        },
    };
    // #endregion

    return (
        <TableContainer
            component={Container}
            maxWidth="md"
            className={classes.root}
        >
            <div className={classes.title}>
                <span>{postContent.title}</span>
            </div>
            <Table className={classes.table}>
                <TableHead className={classes.tableHead}>
                    <TableRow
                        className={classes.row}
                        style={{ borderTop: 'none' }}
                    >
                        <TableCell className={classes.featureIcon} />
                        <TableCell className={classes.featureText} />
                        <TableCell className={classes.tableCell}>
                            <div className={classes.camIconContainer}>
                                <div className={classes.camIconText}>
                                    {postContent.column[0].title}
                                </div>
                                <Image
                                    className={classes.camIcon}
                                    alt={postContent.column[0].alt}
                                    src={postContent.column[0].src}
                                    fallback={postContent.column[0].fallback}
                                />
                            </div>
                        </TableCell>
                        <Hidden xsDown>
                            <TableCell className={classes.tableCell}>
                                <div
                                    style={{
                                        fontFamily: 'FuturaPT',
                                        fontSize: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    VS
                                </div>
                            </TableCell>
                        </Hidden>
                        <TableCell className={classes.tableCell}>
                            <div className={classes.camIconContainer}>
                                <div className={classes.camIconText}>
                                    {postContent.column[1].title}
                                </div>
                                <Image
                                    className={classes.camIcon}
                                    alt={postContent.column[1].alt}
                                    src={postContent.column[1].src}
                                    fallback={postContent.column[1].fallback}
                                />
                            </div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                    {postContent.rows.map((row) => (
                        <TableRow key={row.title} className={classes.row}>
                            <TableCell className={classes.featureIcon}>
                                <Image
                                    className={classes.icon}
                                    alt={row.alt}
                                    src={row.src.src}
                                    type="image/svg+xml"
                                />
                            </TableCell>
                            <TableCell className={classes.featureText}>
                                <div className={classes.featureTitle}>
                                    {row.title}
                                </div>
                                <div className={classes.featureSubtitle}>
                                    {row.subtitle}
                                </div>
                            </TableCell>
                            <TableCell className={classes.featureCheck}>
                                {row.furboCam ? (
                                    <Check className={classes.checkIcon} />
                                ) : (
                                    <Clear className={classes.xIcon} />
                                )}
                            </TableCell>
                            <Hidden xsDown>
                                <TableCell className={classes.tableCell} />
                            </Hidden>
                            <TableCell className={classes.featureCheck}>
                                {row.securityCam ? (
                                    <Check className={classes.checkIcon} />
                                ) : (
                                    <Clear className={classes.xIcon} />
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.learnMoreContainer}>
                <Link
                    href={{
                        pathname: `/${language}/pages/designed-for-dogs`,
                        query: location.query,
                    }}
                    passHref>
                    <Button
                        className={classes.learnMoreButton}
                        onClick={postContent.button.onClick()}
                    >
                        {postContent.button.text}
                    </Button>
                </Link>
            </div>
        </TableContainer>
    );
};

export default DesignedForDogs;
