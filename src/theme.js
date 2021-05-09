import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

// Fix Warning about deprecated findDOMNode
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
        fontSize: 12,
        lineHeight: 1.5,
        fontWeightRegular: 200
    },
});

export default theme;
