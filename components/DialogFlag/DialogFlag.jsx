import React from 'react';
import { Link } from 'react-router-dom';
import { useRouter } from 'next/router'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Close from '@material-ui/icons/Close';
import Image from '@/components/Image';
import { REGION_INFO } from '@/config/navigation';

import styles from './DialogFlagStyle';

const useStyles = makeStyles(styles);

const DialogFlag = ({ openDialog, handleCloseDialog }) => {
    const theme = useTheme();
    const classes = useStyles();
    const router = useRouter();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                open={openDialog}
                onClose={handleCloseDialog}
            >
                <DialogContent
                    className={classes.dialogContent}
                    onClick={() => {
                        if (openDialog) {
                            handleCloseDialog();
                        }
                    }}
                >
                    <DialogContentText>
                        <div className={classes.dialogContentContainer}>
                            <div className={classes.dialogContentTitle}>
                                Visit Your Location
                            </div>
                            <Close
                                className={classes.blackIcon}
                                onClick={handleCloseDialog}
                            />
                        </div>
                        <div className={classes.blackUnderLine} />
                        <div>
                            {Object.values(REGION_INFO).map((list) => {
                                if (list.code === 'cn') {
                                    return null;
                                }
                                return (
                                    <div className={classes.dialogContentList} key={list.country}>
                                        <Button
                                            className={classes.regionButton}
                                            component={
                                                list.href ? 'button' : Link
                                            }
                                            to={
                                                list.href
                                                    ? null
                                                    : {
                                                        pathname: list?.path,
                                                        search:
                                                            router.pathname,
                                                    }
                                            }
                                            href={list?.href}
                                        >
                                            <Image
                                                className={
                                                    classes.dialogContentListImage
                                                }
                                                src={list.image}
                                                alt={list.country}
                                                type="image/svg+xml"
                                            />
                                            <div
                                                className={
                                                    classes.dialogContentListText
                                                }
                                            >
                                                {list.country}
                                            </div>
                                        </Button>
                                    </div>
                                );
                            })}
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
};

DialogFlag.propTypes = {
    openDialog: PropTypes.bool,
    handleCloseDialog: PropTypes.func,
    regionLists: PropTypes.object,
};

export default DialogFlag;
