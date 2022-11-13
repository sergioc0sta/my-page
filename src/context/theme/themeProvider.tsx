import { useState } from 'react';
import { ThemeContext } from './themeContext';

const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setDarkTheme] = useState(true);

    const setTheme = () => {
        setDarkTheme((prev) => !prev);
    };

    return <ThemeContext.Provider value={{ isDarkTheme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
