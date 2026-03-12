import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/theme';

const Theme = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const { isDarkTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (typeof document === 'undefined') {
            return;
        }

        document.documentElement.classList.toggle('dark', isDarkTheme);
    }, [isDarkTheme]);

    return <>{children}</>;
};

export default Theme;
