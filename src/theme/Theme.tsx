import React, { useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme, themeLight } from './themeProperties';
import { ThemeContext } from '../context/theme';

const Theme = ({ children }:{children: React.ReactNode}): JSX.Element => {
    const { isDarkTheme } = useContext(ThemeContext);
    const themeSelect = isDarkTheme ? theme : themeLight;

    return <ThemeProvider theme={themeSelect}>{children}</ThemeProvider>;
};

export default Theme;
