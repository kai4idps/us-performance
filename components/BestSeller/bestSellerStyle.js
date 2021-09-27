import {
    HOME_COLLIE_DESKTOP_WEBP,
    HOME_COLLIE_DESKTOP_JPG,
    HOME_COLLIE_MOBILE_WEBP,
    HOME_COLLIE_MOBILE_JPG,
} from '@/config/imageConfigs/home';

const bestSellerStyle = (theme) => ({
    root: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '500px',
        backgroundSize: 'contain',
        backgroundPosition: 'right',
        backgroundImage: `url(${HOME_COLLIE_DESKTOP_WEBP}), url(${HOME_COLLIE_DESKTOP_JPG})`,
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: 'cover',
            backgroundPosition: '20% 50%',
            height: '400px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '600px',
            backgroundSize: 'cover',
            backgroundImage: `url(${HOME_COLLIE_MOBILE_WEBP}), url(${HOME_COLLIE_MOBILE_JPG})`,
        },
    },
    content: {
        backgroundColor: 'transparent',
        padding: '20px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 0px 20px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '40px 0px 20px',
            justifyContent: 'flex-start',
        },
    },
    ratingContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40px',
        width: 'auto',
    },
    ratingStars: {
        height: '40px',
        [theme.breakpoints.down('sm')]: {
            height: '30px',
        },
    },
    ratingText: {
        backgroundColor: 'transparent',
        fontFamily: 'FuturaPT',
        fontSize: '22px',
        color: 'black',
        height: '40px',
        lineHeight: '40px',
        paddingTop: '3px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        },
    },
    bestSellerContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        padding: '15px 3px 0px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            justifyContent: 'center',
        },
    },
    bestSellerIcon: {
        height: 'auto',
        width: '180px',
    },
    amazonContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        padding: '20px 3px 0px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            justifyContent: 'center',
        },
    },
    amazonLogo: {
        height: 'auto',
        width: '90px',
    },
    shopContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        height: 'auto',
        padding: '15px 3px 0px',
    },
    shopButton: {
        padding: '3px 50px 3px',
        borderRadius: '40px',
        fontSize: '18px',
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
    },
});

export default bestSellerStyle;
