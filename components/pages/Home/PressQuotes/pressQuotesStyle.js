import { arrow } from 'config/styles/carousel';

const pressQuotesStyle = (theme) => ({
    root: {
        backgroundColor: '#f7f7f7',
        height: 'auto',
        width: '100%',
        borderRadius: '10px',
        padding: '30px 0px 20px',
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
        backgroundColor: '#f7f7f7',
        height: '100%',
        padding: '30px 15px 30px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 15px 0px',
        },
    },
    quoteContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        width: 'auto',
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
        },
    },
    quotationMarkLeft: {
        position: 'relative',
        fontSize: '36px',
        fontFamily: 'PingFang TC',
        fontWeight: 'bold',
        color: '#f7cd3d',
        top: '-15px',
        left: '-10px',
    },
    quotationMarkRight: {
        position: 'relative',
        fontSize: '36px',
        fontFamily: 'PingFang TC',
        fontWeight: 'bold',
        color: '#f7cd3d',
        bottom: '-25px',
        right: '-10px',
    },
    quote: {
        fontFamily: 'FuturaPT, sans-serif',
        color: '#545454',
        height: 'auto',
        width: 'auto',
        fontSize: '28px',
    },
    arrow,
    indicatorContainer: {
        backgroundColor: 'transparent',
        height: 'auto',
        width: '100%',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '15px',
        },
    },
    button: {
        backgroundColor: 'transparent',
        margin: '5px',
        [theme.breakpoints.down('sm')]: {
            backgroundColor: '#f7cd3d',
            width: '15px',
            height: '15px',
            '&,&:hover,&:focus': {
                backgroundColor: '#f7cd3d',
            },
        },
    },
    buttonIcon: {
        width: '160px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default pressQuotesStyle;
