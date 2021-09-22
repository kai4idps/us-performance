import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/icons/Menu';
import ShopButton from '@/components/ShopButton';
import ShopIconButton from '@/components/ShopIconButton';
import AccountButton from '@/components/AccountButton';
import styles from './headerStyle';
import { Router } from 'next/router';

const useStyles = makeStyles(styles);

const Header = (props) => {
    const {
        pageLinks,
        brand,
        banner,
        drawerOpen,
        setDrawerOpen,
        isWebconsoleRoutes = false,
        isAuth = false,
    } = props;
    const classes = useStyles();
    const location = useRouter();

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const appBarClasses = `${classes.appBar} ${
        isWebconsoleRoutes ? classes.webConsoleAppBar : null
    } ${
        location.pathname === '/account'
            ? classes.webConsoleTransparentAppBar
            : null
    } ${banner ? classes.banner : null}`;

    const containerClasses = `${classes.container} ${
        isWebconsoleRoutes ? classes.webConsoleContainer : null
    }`;

    return (
        <AppBar className={appBarClasses} elevation={0}>
            <div style={{ width: '100%' }}>
                {banner}
                <Container maxWidth="lg" className={classes.outerContainer}>
                    <Toolbar className={containerClasses}>
                        <Hidden mdUp>
                            {!isWebconsoleRoutes && (
                                <div className={classes.leftContainer}>
                                    <IconButton
                                        className={classes.icon}
                                        aria-label="menu-drawer"
                                        onClick={handleDrawerToggle}
                                    >
                                        <Menu />
                                    </IconButton>
                                </div>
                            )}
                            {brand}
                            <div className={classes.rightContainer}>
                                {location.pathname !== '/account' && (
                                    <AccountButton isAuth={isAuth} />
                                )}
                                {!isWebconsoleRoutes &&
                                    location.pathname !==
                                        '/ca/products/furbo-dog-camera' &&
                                    location.pathname !== '/ca/pages/cart' && (
                                        <ShopIconButton
                                            className={classes.shopIconButton}
                                        />
                                    )}
                            </div>
                        </Hidden>
                        <Hidden smDown>
                            {brand}
                            <div className={classes.rightContainer}>
                                {!isWebconsoleRoutes && pageLinks}
                                <div className={classes.headerSpacing} />
                                {location.pathname !== '/account' && (
                                    <AccountButton isAuth={isAuth} />
                                )}
                                {!isWebconsoleRoutes &&
                                    location.pathname !==
                                        '/ca/products/furbo-dog-camera' &&
                                    location.pathname !== '/ca/pages/cart' && (
                                        <ShopButton
                                            className={classes.shopButton}
                                        />
                                    )}
                            </div>
                        </Hidden>
                    </Toolbar>
                    <Hidden mdUp>
                        <Drawer
                            variant="temporary"
                            anchor="left"
                            open={drawerOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            BackdropProps={{ invisible: true }}
                            onClose={handleDrawerToggle}
                            elevation={2}
                        >
                            <div className={classes.drawerContainer}>
                                <div className={classes.pageLinks}>
                                    {pageLinks}
                                </div>
                            </div>
                        </Drawer>
                    </Hidden>
                </Container>
            </div>
        </AppBar>
    );
};

Header.defaultProp = {};

Header.propTypes = {
    pageLinks: PropTypes.node,
    brand: PropTypes.node,
    banner: PropTypes.node,
    drawerOpen: PropTypes.bool,
    setDrawerOpen: PropTypes.func,
    isWebconsoleRoutes: PropTypes.bool,
    isAuth: PropTypes.bool,
};

export default Header;
