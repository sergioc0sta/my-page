import { theme, themeLight } from './themeProperties';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme';
import { ThemeProvider } from '@emotion/react';

const Theme = ({ children }) => {
    const { isDarkTheme } = useContext(ThemeContext);
    const themeSelect = isDarkTheme ? theme : themeLight;

    return <ThemeProvider theme={themeSelect}>{children}</ThemeProvider>;
};

export default Theme;
