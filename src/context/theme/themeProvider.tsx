import React, { useEffect, useState } from 'react';
import { ThemeContext } from './themeContext';

const ThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [isDarkTheme, setDarkTheme] = useState(false);
    const [isThemeReady, setThemeReady] = useState(false);

    const setTheme = (): void => {
        setDarkTheme((prev) => !prev);
    };

    useEffect((): void => {
        if (typeof window === 'undefined') {
            return;
        }

        const storedMode = localStorage.getItem('theme-mode');
        setDarkTheme(storedMode === 'dark');
        setThemeReady(true);
    }, []);

    useEffect((): void => {
        if (typeof window === 'undefined' || !isThemeReady) {
            return;
        }

        localStorage.setItem('theme-mode', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme, isThemeReady]);

    return <ThemeContext.Provider value={{ isDarkTheme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
