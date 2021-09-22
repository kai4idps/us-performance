const mainStyle = (theme) => ({
    root: {
        paddingTop: '75px',
        backgroundColor: 'white',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '60px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '60px',
        },
    },
    iconButton: {
        padding: '16px 0px 16px',
        [theme.breakpoints.down('sm')]: {
            padding: '8px 0px 8px',
        },
    },
    icon: {
        width: '100px',
        height: '30px',
        [theme.breakpoints.down('sm')]: {
            width: '90px',
            height: '28px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90px',
            height: '28px',
        },
    },
    banner: {
        paddingTop: '150px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '120px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '120px',
        },
    },
});

export default mainStyle;
