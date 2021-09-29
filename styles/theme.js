import { createMuiTheme } from '@material-ui/core/styles';

export const BREAKPOINTS = {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    TABLET: 'tablet',
    LAPTOP: 'laptop',
    DESKTOP: 'desktop',
};

export const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
            tablet: 640,
            laptop: 1024,
            desktop: 1280,
        },
    },
});
