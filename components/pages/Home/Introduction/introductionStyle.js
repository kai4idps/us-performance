import { arrow } from '@/config/styles/carousel';

const introductionStyle = (theme) => ({
    root: {
        backgroundColor: '#f7f7f7',
        height: 'auto',
        width: '100%',
    },
    title: {
        backgroundColor: 'transparent',
        height: '100px',
        lineHeight: '100px',
        fontFamily: 'FuturaPT',
        fontSize: '32px',
        textAlign: 'center',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px',
            height: '100px',
            lineHeight: '100px',
        },
    },
    path: {
        position: 'absolute',
        top: '60%',
        [theme.breakpoints.down('xs')]: {
            right: '4%',
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
        backgroundColor: '#f7f7f7',
        height: '100%',
        padding: '0px 15px 30px',
        '& .MuiPaper-rounded': {
            borderRadius: 8,
        },
    },
    card: {
        top: 0,
        width: '100%',
        height: '100%',
    },
    cardContent: {
        textAlign: 'center',
        fontFamily: 'Avenir-Medium, sans-serif',
        fontSize: '20px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
    cardMedia: {
        height: 'auto',
        width: '100%',
    },
    arrow,
});

export default introductionStyle;
