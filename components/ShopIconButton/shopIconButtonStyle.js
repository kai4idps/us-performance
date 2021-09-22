const shopIconButtonStyle = (theme) => ({
    root: {
        position: 'relative',
    },
    button: {
        zIndex: 2,
        padding: 6,
        [theme.breakpoints.down('sm')]: {
            padding: 5,
        },
    },
    image: {
        width: '25px',
        height: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25px',
        height: '25px',
    },
});

export default shopIconButtonStyle;
