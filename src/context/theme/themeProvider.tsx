import React, { useState } from 'react';
import { ThemeContext } from './themeContext';

const ThemeProvider = ({ children }: {children: React.ReactNode}): JSX.Element => {
    const [isDarkTheme, setDarkTheme] = useState(true);

    const setTheme = ():void => {
        setDarkTheme((prev) => !prev);
    };

    return <ThemeContext.Provider value={{ isDarkTheme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
