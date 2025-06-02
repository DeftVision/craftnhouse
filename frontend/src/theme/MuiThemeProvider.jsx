import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { siteConfig } from '../config/siteConfig';

const theme = createTheme({
    palette: {
        primary: {
            main: siteConfig.branding.primaryColor,
        },
    },
    typography: {
        fontFamily: `${siteConfig.branding.bodyFont}, sans-serif`,
    },
});

export default function MuiThemeProvider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
