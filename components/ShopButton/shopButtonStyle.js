const shopButtonStyle = (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '24px',
        },
    },
    button: {
        zIndex: 1000,
        width: '120px',
        height: '35px',
        color: '#ffffff',
        fontFamily: 'FuturaPT',
        fontWeight: 500,
        backgroundColor: '#f16849',
        textTransform: 'none',
        '&,&:hover,&:focus': {
            backgroundColor: '#f16849',
        },
    },
});

export default shopButtonStyle;
