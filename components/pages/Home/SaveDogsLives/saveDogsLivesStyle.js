import { arrow } from 'config/styles/carousel';

const saveDogsLivesStyle = (theme) => ({
    root: {
        height: 'auto',
        width: '100%',
        borderRadius: '10px',
    },
    title: {
        backgroundColor: 'transparent',
        height: 'auto',
        fontFamily: 'FuturaPT',
        fontSize: '32px',
        textAlign: 'center',
        padding: '10px 10px 10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px',
        },
    },
    subTitle: {
        fontSize: '30px',
        fontFamily: 'FuturaPT',
        padding: '10px 0',
        textAlign: 'center',
        '& span': {
            backgroundImage:
                'linear-gradient(transparent 65%, rgb(247, 205, 61) 65%, rgb(247, 205, 61) 85%, transparent 85%)',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
        },
    },
    counterContainer: {},
    counter: {
        display: 'flex',
        justifyContent: 'center',
    },
    counterBox: {
        fontFamily: 'FuturaPT, sans-serif',
        textAlign: 'center',
        border: '1px solid #d0d0d0',
        color: 'black',
        height: '55px',
        width: '50px',
        borderRadius: '3px',
        lineHeight: '58px',
        margin: '5px',
        fontSize: '32px',
    },
    counterText: {
        textAlign: 'center',
        fontFamily: 'FuturaPT, sans-serif',
        paddingTop: '10px',
        color: '#616161',
        fontSize: '32px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        },
    },
    carouselContainer: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        padding: '0px 35px 0px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 15px 0px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0px 5px 0px',
        },
    },
    slide: {
        height: '100%',
        padding: '0px 15px 30px',
    },
    card: {
        top: 0,
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    cardContent: {},
    cardMedia: {
        height: 'auto',
        width: '100%',
    },
    arrow,
    cardTitle: {
        fontSize: '20px',
        fontFamily: 'FuturaPt',
        textAlign: 'left',
        lineHeight: 1,
        '& span': {
            backgroundColor: '#f7cd3d',
        },
    },
    cardSubtitle: {
        padding: '10px 0px',
        fontSize: '16px',
        fontFamily: 'AvenirLTStd-Book, sans-serif',
        fontWeight: '300px',
        textAlign: 'left',
    },
    cardReadMore: {
        textAlign: 'left',
        fontFamily: 'AvenirLTStd-Book, sans-serif',
        fontSize: '16px',
        paddingTop: '0px',
        color: '#2c69ae',
    },
    cardName: {
        position: 'absolute',
        fontSize: '16px',
        bottom: '5px',
        right: '10px',
        textAlign: 'right',
        fontFamily: 'AvenirLTStd-Book, sans-serif',
    },
});

export default saveDogsLivesStyle;
