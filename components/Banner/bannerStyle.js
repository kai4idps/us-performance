const bannerStyle = (theme) => ({
    root: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 15px',
        },
    },

    leftImg: {
        marginRight: '10px',
        width: '40px',
        height: '40px',
        [theme.breakpoints.down('md')]: {
            width: '35px',
            height: '35px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '30px',
            height: '30px',
        },
    },
    rightImg: {
        marginLeft: '10px',
        width: '40px',
        height: '40px',
        [theme.breakpoints.down('md')]: {
            width: '35px',
            height: '35px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '30px',
            height: '30px',
        },
    },
    bannerContent: {
        fontSize: '18px',
        lineHeight: 'normal',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '80px',
        fontFamily: 'Avenir',
        fontColor: '#434343',
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            borderRadius: '5px',
            height: '60px',
        },
    },
    time: {
        width: '40px',
        height: '30px',
        fontFamily: 'Avenir',
        lineHeight: 'normal',
        backgroundColor: 'white',
        borderRadius: '3px',
        opacity: '0.9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeDigit: {
        width: '40px',
        height: '14px',
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: 'Avenir',
    },
    timeWord: {
        width: '40px',
        height: 'auto',
        fontSize: '10px',
    },
    colon: {
        padding: '0px 5px',
        lineHeight: '30px',
        textAlign: 'center',
        height: '30px',
        fontSize: '14px',
        fontFamily: 'Avenir',
    },
    units: {
        width: '20px',
        height: '25px',
        margin: '0px 5px 1px',
        backgroundColor: 'white',
        borderRadius: '3px',
        opacity: '0.9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    unitsDigit: {
        fontSize: '18px',
        lineHeight: '18px',
        paddingTop: '2px',
        height: 'auto',
        fontWeight: 'bold',
        fontFamily: 'Avenir',
    },
});

export default bannerStyle;
