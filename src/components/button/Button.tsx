import { ThemeContext } from '../../context/theme';
import React, { useContext } from 'react';

const Button = (): JSX.Element => {
    const { setTheme, isDarkTheme } = useContext(ThemeContext);
    const icon = isDarkTheme ? '☀️' : '🌑';

    return (
        <button
            type="button"
            onClick={setTheme}
            aria-label={isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-slate-700 transition-colors duration-300 hover:text-accent dark:text-slate-300 dark:hover:text-orange-300"
        >
            {icon}
        </button>
    );
};

export default Button;
