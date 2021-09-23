const designedForDogsStyle = (theme) => ({
    root: {
        backgroundColor: 'transparent',
        height: 'auto',
        width: '100%',
        padding: '20px 50px 10px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 10px 10px',
        },
    },
    title: {
        backgroundColor: 'transparent',
        fontFamily: 'FuturaPT',
        fontSize: '30px',
        color: 'black',
        height: 'auto',
        width: '100%',
        textAlign: 'center',
        padding: '0px 10px 20px',
        '& span': {
            backgroundImage:
                'linear-gradient(transparent 65%, rgb(247, 205, 61) 65%, rgb(247, 205, 61) 85%, transparent 85%)',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
        },
    },
    table: {
        backgroundColor: 'transparent',
        position: 'relative',
    },
    tableHead: {
        backgroundColor: 'transparent',
        margin: '0px',
        padding: '0px',
    },
    tableBody: {
        backgroundColor: 'transparent',
        margin: '0px',
        padding: '0px',
        '& tr:nth-last-child(1)': {
            '& div:first-child': {
                color: '#d0021b',
            },
        },
    },
    tableCell: {
        margin: '0px',
        padding: '0px',
    },
    camIconContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    camIconText: {
        padding: '0px 0px 15px',
        fontFamily: 'FuturaPT',
        fontSize: '18px',
        width: '100px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    camIcon: {
        width: '50px',
        height: 'auto',
    },
    row: {
        width: '100%',
        borderTop: 'solid 2px #f7cd3d',
        borderBottom: 'solid 2px #f7cd3d',
    },
    featureIcon: {
        textAlign: 'center',
        padding: '0px',
        border: 'none',
        width: '100px',
        height: '80px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '60px',
        },
    },
    featureText: {
        padding: '0px',
        border: 'none',
        width: '420px',
        height: '80px',
    },
    featureTitle: {
        fontFamily: 'FuturaPT',
        fontSize: '20px',
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
    },
    featureSubtitle: {
        fontFamily: 'FuturaPT',
        fontSize: '16px',
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
    },
    featureCheck: {
        padding: '0px',
        textAlign: 'center',
        border: 'none',
        width: 'auto',
        height: '80px',
    },
    icon: {
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        width: '50px',
        height: 'auto',
    },
    xIcon: {
        width: '50px',
        height: 'auto',
        color: '#a1a1a1',
    },
    learnMoreContainer: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        paddingTop: '10px',
    },
    learnMoreButton: {
        border: 'solid 1px black',
        borderRadius: '20px',
        padding: '8px 35px 8px',
        textTransform: 'none',
    },
});

export default designedForDogsStyle;
