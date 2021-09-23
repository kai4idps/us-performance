const cloudRecordingStyle = (theme) => ({
    root: {
        backgroundColor: 'transparent',
        height: 'auto',
        width: '100%',
        padding: '60px 80px 60px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 20px 10px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '10px 0px 10px',
        },
    },
    video: {
        backgroundColor: 'transparent',
        display: 'flex',
        height: 'auto',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            borderRadius: '55px 55px 0 0',
        },
    },
    text: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '0px 40px 0px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
            justifyContent: 'flex-start',
        },
    },
    title: {
        backgroundColor: 'transparent',
        fontFamily: 'FuturaPT',
        fontSize: '30px',
        color: 'black',
        height: 'auto',
        marginTop: '5%',
        padding: '10px',
        paddingBottom: '10px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '10px',
            paddingBottom: '0px',
            fontSize: '24px',
            textAlign: 'center',
        },
    },
    subtitle: {
        backgroundColor: 'transparent',
        fontFamily: 'AvenirLTStd-Book, sans-serif',
        fontSize: '20px',
        fontWeight: '300',
        color: 'black',
        width: 'auto',
        height: 'auto',
        padding: '10px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px',
            width: '100%',
            textAlign: 'center',
            fontSize: '18px',
        },
    },
    containerGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoGrid: {
        backgroundColor: 'transparent',
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: '40px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px',
        },
    },
    phoneViewContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 0,
        right: '60px',
    },
    phoneView: {
        height: '100%',
        width: 'auto',
    },
});

export default cloudRecordingStyle;
