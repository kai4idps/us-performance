const DialogFlagStyle = (theme) => ({
    blackUnderLine: {
        width: '100%',
        display: 'block',
        borderTop: '1px solid #434343',
        margin: '10px auto 20px',
    },
    regionButton: {
        width: '100%',
        justifyContent: 'flex-start',
        padding: '10px 5px',
        '&:hover': {
            backgroundColor: 'inherit',
            textDecoration: 'inherit',
        },
    },
    blackIcon: {
        color: '#333',
    },
    dialogContent: {
        padding: '30px',
        '&:first-child': {
            paddingTop: '40px',
        },
    },
    dialogContentContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dialogContentTitle: {
        fontSize: '20px',
        fontWeight: '500',
        fontFamily: 'Avenir, sans-serif',
        color: '#434343',
        textAlign: 'left',
    },
    dialogContentList: {
        display: 'flex',
        alignItems: 'center',
        '&:first-child': {
            paddingTop: '0px',
        },
    },
    dialogContentListImage: {
        width: '40px',
        display: 'flex',
        alignItems: 'center',
    },
    dialogContentListText: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#434343',
        paddingLeft: '20px',
        textTransform: 'capitalize',
    },
});

export default DialogFlagStyle;
