// import { createMuiTheme } from '@material-ui/core/styles';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

// A custom theme for this app
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
        fontSize: 12,
        lineHeight: 1.5,
        fontWeightRegular: 200
    },
});

export default theme;
