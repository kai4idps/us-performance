const shopButtonStyle = (theme) => ({
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
    button: {
        zIndex: 1000,
        width: '200px',
        height: '40px',
        color: '#ffffff',
        fontSize: '18px',
        fontWeight: '500',
        backgroundColor: '#f16849',
        textTransform: 'none',
        borderRadius: '100px',
        fontFamily: 'FuturaPT',
        '&,&:hover,&:focus': {
            backgroundColor: '#f16849',
            height: '35px',
        },
    },
});

export default shopButtonStyle;
