const recommendStyle = (theme) => ({
    root: {
        backgroundColor: '#f7f7f7',
        height: 'auto',
        width: '100%',
        padding: '20px',
    },
    title: {
        backgroundColor: 'transparent',
        padding: '10px 0px 5px',
        fontFamily: 'FuturaPT',
        fontSize: '30px',
        width: '100%',
        textAlign: 'center',
        color: '#000',
        '& span': {
            backgroundImage:
                'linear-gradient(transparent 65%, rgb(247, 205, 61) 65%, rgb(247, 205, 61) 85%, transparent 85%)',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px',
        },
    },
    vetContainer: {
        backgroundColor: 'transparent',
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    trainerContainer: {
        backgroundColor: 'transparent',
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    card: {
        top: 0,
        width: '360px',
        height: '100%',
        borderRadius: '5px',
        paddding: 0,
    },
    cardContent: {
        position: 'relative',
        textAlign: 'center',
        fontFamily: 'FuturaPT',
        fontSize: '18px',
        '&:last-child': {
            padding: '24px',
            paddingTop: '16px',
            paddingBottom: '16px',
        },
    },
    cardMedia: {
        height: 'auto',
        width: '100%',
    },
});

export default recommendStyle;
