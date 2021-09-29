const mainStyle = (theme) => ({
    root: {
        '& h1': {
            fontFamily: 'FuturaPT',
            fontSize: '30px',
            fontWeight: 500,
            color: '#434343',
            margin: 0,
            [theme.breakpoints.down('sm')]: {
                fontSize: '21px',
            },
        },
        '& h2': {
            fontFamily: 'FuturaPT',
            fontSize: '24px',
            fontWeight: 500,
            color: '#434343',
            margin: 0,
            [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
            },
        },
        '& h3': {
            fontFamily: 'FuturaPT',
            fontSize: '21px',
            fontWeight: 500,
            color: '#434343',
            margin: 0,
            [theme.breakpoints.down('sm')]: {
                fontSize: '16px',
            },
        },
        '& h4': {
            fontFamily: 'Avenir',
            fontSize: '24px',
            fontWeight: 800,
            color: '#434343',
            margin: 0,
            [theme.breakpoints.down('sm')]: {
                fontSize: '16px',
            },
        },
        '& h5': {
            fontFamily: 'Avenir',
            fontSize: '24px',
            fontWeight: 500,
            color: '#434343',
            margin: 0,
            [theme.breakpoints.down('sm')]: {
                fontSize: '16px',
            },
        },
        '& h6': {
            fontFamily: 'Avenir',
            fontSize: '18px',
            fontWeight: 800,
            color: '#434343',
            margin: 0,
            [theme.breakpoints.down('sm')]: {
                fontSize: '14px',
            },
        },
        '& p': {
            fontFamily: 'Avenir',
            margin: 0,
        },
    },
});

export default mainStyle;
