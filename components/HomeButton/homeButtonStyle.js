const homeButtonStyle = (theme) => ({
    iconButton: {
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
        },
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90px',
        height: '30px',
        [theme.breakpoints.down('sm')]: {
            width: '60px',
            height: '20px',
        },
    },
});

export default homeButtonStyle;
