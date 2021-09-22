const headerStyle = (theme) => ({
    appBar: {
        display: 'flex',
        border: '0',
        color: '#666666',
        width: '100%',
        height: '75px',
        padding: '0px 0px 0px',
        borderBottom: 'solid 3px #f7cd3d',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        zIndex: 1100,
        [theme.breakpoints.down('sm')]: {
            height: '55px',
            borderBottom: 'none',
        },
    },
    webConsoleAppBar: {
        borderBottom: 'none',
        backgroundColor: '#ffffff',
    },
    webConsoleTransparentAppBar: {
        [theme.breakpoints.down('sm')]: {
            backgroundColor: 'transparent',
        },
    },
    banner: {
        height: '155px',
        [theme.breakpoints.down('sm')]: {
            height: '145px',
        },
    },
    outerContainer: {
        padding: '0px 50px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 15px 10px',
        },
    },
    container: {
        minHeight: '50px',
        flex: '1',
        margin: '0px',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexWrap: 'nowrap',
        padding: '0px',
        height: '75px',
        [theme.breakpoints.down('sm')]: {
            height: '55px',
        },
    },
    webConsoleContainer: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
    },
    icon: {
        width: '55px',
        height: '55px',
        padding: 0,
        [theme.breakpoints.down('sm')]: {
            width: '40px',
            height: '40px',
        },
    },
    leftContainer: {
        width: 'auto',
        height: '75px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            height: '55px',
        },
    },
    rightContainer: {
        width: 'auto',
        height: '75px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            height: '55px',
        },
    },
    headerSpacing: {
        paddingLeft: '24px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0px',
        },
    },
    drawerPaper: {
        display: 'block',
        position: 'fixed',
        backgroundColor: '#f7f7f7',
        border: 'none',
        height: 'calc(100vh - 145px)',
        width: '300px',
        right: 'auto',
        top: '145px',
        left: '0',
        overflowY: 'auto',
        borderTop: 'none',
        textAlign: 'left',
        paddingRight: '0px',
        paddingLeft: '0px',
    },
    drawerContainer: {
        width: '100%',
        height: '100%',
    },
    shopButton: {
        padding: 'auto',
        borderRadius: '100px',
        fontSize: '15px',
        fontWeight: 800,
    },
    shopIconButton: {},
    pageLinks: {
        position: 'relative',
        display: 'flex',
        height: 'auto',
    },
});

export default headerStyle;
