import {
    HOME_KV_DESKTOP_WEBP,
    HOME_KV_DESKTOP_JPG,
    HOME_KV_MOBILE_WEBP,
    HOME_KV_MOBILE_JPG,
} from 'config/imageConfigs/home';

const keyVisualPostStyle = (theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        height: '600px',
        width: '100%',
        flexWrap: 'wrap',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'right',
        backgroundImage: `url(${HOME_KV_DESKTOP_WEBP}), url(${HOME_KV_DESKTOP_JPG})`,
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: '100%',
            backgroundImage: `url(${HOME_KV_MOBILE_WEBP}), url(${HOME_KV_MOBILE_JPG})`,
            backgroundPosition: 'bottom',
            minHeight: '800px',
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '600px',
        },
    },
    text: {
        backgroundColor: 'transparent',
        padding: '0px 20% 0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
            justifyContent: 'flex-start',
        },
    },
    title: {
        backgroundColor: 'transparent',
        fontFamily: 'Avenir-Medium, sans-serif',
        fontSize: '22px',
        color: 'black',
        height: 'auto',
        marginTop: '5%',
        padding: '5px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    subtitle: {
        backgroundColor: 'transparent',
        fontFamily: 'FuturaPT',
        fontSize: '28px',
        fontWeight: '400',
        color: 'black',
        width: 'auto',
        height: 'auto',
        padding: '5px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '10px 20px 10px',
            textAlign: 'center',
            fontSize: '24px',
        },
    },
    playContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        height: 'auto',
        padding: '0px 3px 0px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            justifyContent: 'center',
        },
    },
    playButton: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        fontFamily: 'FuturaPT',
        textTransform: 'none',
        padding: '5px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
    },
    playIcon: {
        backgroundColor: 'transparent',
        width: '40px',
        height: '40px',
        [theme.breakpoints.down('sm')]: {
            width: '35px',
            height: '35px',
        },
    },
    shopContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        height: 'auto',
        padding: '8px 3px 0px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            justifyContent: 'center',
        },
    },
    shopButton: {
        padding: '3px 50px 3px',
        borderRadius: '40px',
        fontSize: '14pt',
        fontWeight: '500',
        width: '100%',
        [theme.breakpoints.down('lg')]: {
            fontSize: '13pt',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '12pt',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '12pt',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '11pt',
        },
    },
    phoneContainer: {
        position: 'absolute',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    phone: {
        width: '300px',
        height: 'auto',
        backgroundColor: 'transparent',
        [theme.breakpoints.down('xs')]: {
            width: '200px',
            height: 'auto',
        },
    },
});

export default keyVisualPostStyle;
