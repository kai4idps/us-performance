const videoButtonStyle = (theme) => ({
    root: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    playButton: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '22px',
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
    },
    playIcon: {
        display: 'flex',
        width: '30px',
        height: '30px',
        paddingRight: '5px',
        [theme.breakpoints.down('sm')]: {
            width: '25px',
            height: '25px',
        },
    },
    playText: {
        fontFamily: 'Avenir',
        lineHeight: '30px',
        height: '30px',
        [theme.breakpoints.down('sm')]: {
            lineHeight: '25px',
            height: '25px',
        },
    },
});

export default videoButtonStyle;
