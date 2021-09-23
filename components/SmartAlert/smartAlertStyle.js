const smartAlertsStyle = (theme) => ({
    root: {
        backgroundColor: 'transparent',
        position: 'relative',
        height: 'auto',
        width: 'auto',
    },
    indicatorContainer: {
        backgroundColor: 'transparent',
        position: 'relative',
        padding: '10px 0px',
        height: 'auto',
        width: 'auto',
        zIndex: 2,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    button: {
        backgroundColor: 'transparent',
        margin: '5px',
        [theme.breakpoints.down('xs')]: {
            margin: '0px',
        },
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '70px',
        height: '115px',
        [theme.breakpoints.down('xs')]: {
            width: '60px',
        },
    },
    buttonIcon: {
        width: '60px',
        [theme.breakpoints.down('xs')]: {
            width: '50px',
        },
    },
    buttonText: {
        fontFamily: 'FuturaPT',
        fontSize: '14px',
        width: '60px',
        textTransform: 'none',
        lineHeight: 'normal',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
    },
    slide: {
        position: 'relative',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        height: '560px',
        width: '100%',
        flexWrap: 'wrap',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: '100%',
            minHeight: '1100px',
            backgroundPosition: 'bottom',
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '700px',
        },
    },
    contentContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        padding: '0px 50px 0px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 20px 0px',
        },
    },
    title: {
        backgroundColor: 'transparent',
        fontFamily: 'FuturaPT',
        fontSize: '32px',
        color: 'black',
        height: 'auto',
        lineHeight: '32px',
        padding: '15% 25px 0px',
        width: '100%',
        '& span': {
            backgroundImage:
                'linear-gradient(transparent 65%, rgb(247, 205, 61) 65%, rgb(247, 205, 61) 85%, transparent 85%)',
        },
        '& font': {
            fontSize: '22px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '16px',
            },
        },
        '& img': {
            width: '60px',
            verticalAlign: 'middle',
            [theme.breakpoints.down('sm')]: {
                width: '43px',
            },
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10% 0px 0px',
            textAlign: 'center',
            fontSize: '23px',
        },
    },
    subtitle: {
        backgroundColor: 'transparent',
        fontSize: '24px',
        fontWeight: 'lighter',
        color: 'black',
        lineHeight: 'normal',
        padding: '10px 25px 0px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '10px 0px 10px',
            textAlign: 'center',
            fontSize: '18px',
        },
    },
});

export default smartAlertsStyle;
