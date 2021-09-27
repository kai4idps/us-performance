const scrollToTopButtonStyle = (theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'red',
    },
    fab: {
        zIndex: 3,
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        color: '#999',
        backgroundColor: 'white',
        [theme.breakpoints.down('sm')]: {
            bottom: '20px',
            right: '20px',
        },
        [theme.breakpoints.down('xs')]: {
            bottom: '10px',
            right: '10px',
        },
    },
});

export default scrollToTopButtonStyle;
