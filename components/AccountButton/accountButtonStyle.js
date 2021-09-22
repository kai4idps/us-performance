const accountButtonStyle = (theme) => ({
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '35px',
        height: '35px',
        [theme.breakpoints.down('sm')]: {
            width: '25px',
            height: '25px',
        },
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '35px',
        height: '35px',
        [theme.breakpoints.down('sm')]: {
            width: '25px',
            height: '25px',
        },
    },
    dropdown: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        transform: 'translateY(100%)',
        width: '160px',
        background: '#FFFFFF',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        padding: '2px 5px',
    },
    dropdownMenu: {
        color: '#434343',
        fontFamily: 'Avenir',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    menuHomeImage: {
        [theme.breakpoints.up('md')]: {
            width: '23px',
            height: '20px',
            marginTop: '8px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '14px',
            height: '13px',
        },
    },
    menuSignOutImage: {
        [theme.breakpoints.up('md')]: {
            width: '22px',
            height: '20px',
            marginTop: '10px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '12px',
            height: '11px',
            marginBottom: '2px',
        },
    },
    dropdownIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            width: '40px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '30px',
        },
    },
    hr: {
        border: 'none',
        borderTop: '1px solid #F5F5F5',
        margin: 0,
    },
});

export default accountButtonStyle;
