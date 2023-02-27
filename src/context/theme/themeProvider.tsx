import React, { useEffect, useState } from 'react';
import { ThemeContext } from './themeContext';

const ThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const initialState =
        typeof window !== `undefined` ? (localStorage.getItem('theme-mode') === 'dark' ? true : false) : false;

    const [isDarkTheme, setDarkTheme] = useState(initialState);

    const setTheme = (): void => {
        setDarkTheme((prev) => !prev);
    };

    useEffect((): void => {
        localStorage.setItem('theme-mode', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    return <ThemeContext.Provider value={{ isDarkTheme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
