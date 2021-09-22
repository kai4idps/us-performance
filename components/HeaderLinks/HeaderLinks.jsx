import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AccountButton from '@/components/AccountButton';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Image from '@/components/Image';
import ACCOUNT_ICON from '@/assets/images/general/account.svg';
import DialogFlag from '@/components/DialogFlag';
import { REGION_INFO } from '@/config/navigation';
import styles from './headerLinksStyle';

const useStyles = makeStyles(styles);
const OUR_PRODUCTS = 'Our Products';

export default function HeaderLinks(props) {
    const { t } = useTranslation();
    const [openRegionList, setOpenRegionList] = useState(false);
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
    const [productOpen, setProductOpen] = useState(smDown);
    const { routes, onClose, isAuth = false } = props;
    const location = useRouter();
    const language = useSelector((state) => state.language.code);

    const pageOnClick = () => {
        onClose();
    };

    const productOnClick = () => {
        setProductOpen(!productOpen);
    };

    const handleRegionEdit = () => {
        setOpenRegionList(!openRegionList);
    };

    const handleRegionListClose = () => {
        setOpenRegionList(false);
    };

    const classes = useStyles();

    return (
        <>
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <Button
                        className={classes.button}
                        onClick={() => productOnClick()}
                    >
                        {OUR_PRODUCTS}
                        <ExpandMore
                            className={
                                productOpen
                                    ? classes.expandMore
                                    : classes.expandLess
                            }
                        />
                    </Button>
                </ListItem>
                {routes.map((item) => (
                    <Fragment key={t(item.title)}>
                        {item.key !== 'FDN' && item.key !== 'PRODUCTS' && (
                            <ListItem
                                className={`${classes.listItem} ${
                                    smDown
                                        ? productOpen
                                            ? classes.moveDown
                                            : classes.moveUp
                                        : null
                                }`}
                            >
                                {item?.href ? (
                                    <Button
                                        className={classes.button}
                                        href={item.href}
                                    >
                                        {t(item.title)}
                                    </Button>
                                ) : (
                                    <Link
                                        href={{
                                            pathname: item.path,
                                            search: location.query,
                                        }}
                                        passHref>
                                        <Button
                                            className={classes.button}
                                            startIcon={
                                            smDown
                                                ? item.icon.smDown
                                                : item.icon.mdUp
                                            }
                                             onClick={() => pageOnClick(item.path)}
                                        >
                                            {t(item.title)}
                                        </Button>
                                    </Link>
                                )}
                            </ListItem>
                        )}
                    </Fragment>
                ))}
                {smDown && (
                    <>
                        <ListItem
                            className={
                                smDown
                                    ? productOpen
                                        ? classes.moveDown
                                        : classes.moveUp
                                    : null
                            }
                        >
                            <Divider
                                variant="middle"
                                className={classes.drawerDivider}
                            />
                        </ListItem>
                        <ListItem
                            className={`${classes.listItem} ${
                                smDown
                                    ? productOpen
                                        ? classes.moveDown
                                        : classes.moveUp
                                    : null
                            }`}
                        >
                            <AccountButton
                                isAuth={isAuth}
                                content={
                                    <Button className={classes.button}>
                                        <Image
                                            src={ACCOUNT_ICON.src}
                                            alt={'ACCOUNT_ICON'}
                                            className={classes.image}
                                            type="image/svg+xml"
                                        />
                                        <div className={classes.accountText}>
                                            Sign In
                                        </div>
                                    </Button>
                                }
                                className={classes.accountButton}
                            />
                        </ListItem>
                        <ListItem
                            className={`${classes.listItem} ${
                                smDown
                                    ? productOpen
                                        ? classes.moveDown
                                        : classes.moveUp
                                    : null
                            }`}
                        >
                            <Button
                                className={classes.button}
                                onClick={handleRegionEdit}
                            >
                                <Image
                                    className={classes.flag}
                                    src={
                                        REGION_INFO[language.toUpperCase()]
                                            ?.image.src
                                    }
                                    alt={
                                        REGION_INFO[language.toUpperCase()]
                                            ?.code
                                    }
                                    type="image/svg+xml"
                                />
                                <div className={classes.flagText}>
                                    {
                                        REGION_INFO[language.toUpperCase()]
                                            ?.country
                                    }
                                </div>
                            </Button>
                        </ListItem>
                        <DialogFlag
                            openDialog={openRegionList}
                            handleCloseDialog={handleRegionListClose}
                        />
                    </>
                )}
            </List>
            <Grow in={productOpen} className={classes.productList}>
                <List>
                    {routes.map((item) => (
                        <Fragment key={t(item.title)}>
                            {(item.key === 'FDN' ||
                                item.key === 'PRODUCTS') && (
                                <>
                                    <ListItem
                                        className={classes.listItem}
                                    >
                                        {item?.href ? (
                                            <Button
                                                className={classes.button}
                                                href={item.href}
                                            >
                                                {t(item.title)}
                                            </Button>
                                        ) : (
                                            <Link
                                                href={{
                                                    pathname: item.path,
                                                    search: location.query,
                                                }}
                                                passHref>
                                                <Button
                                                    className={classes.button}
                                                    startIcon={
                                                    smDown
                                                        ? item.icon.smDown
                                                        : item.icon.mdUp
                                                    }
                                                    onClick={() => pageOnClick(item.path)}
                                                >
                                                    {t(item.title)}
                                                </Button>
                                            </Link>
                                        )}
                                    </ListItem>
                                    {item.key === 'PRODUCTS' && (
                                        <ListItem className={classes.listItem}
                                         key={t(item.title)}>
                                            <div className={classes.divider} />
                                        </ListItem>
                                    )}
                                </>
                            )}
                        </Fragment>
                    ))}
                </List>
            </Grow>
        </>
    );
}

HeaderLinks.defaultProps = {
    routes: [],
};

HeaderLinks.propTypes = {
    routes: PropTypes.array,
    onClose: PropTypes.func,
    isAuth: PropTypes.bool,
};
