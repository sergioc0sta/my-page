import { createContext } from 'react';

interface ThemeContextType {
    isDarkTheme: boolean;
    setTheme(name: boolean): any;
}

const ThemeContext = createContext<ThemeContextType>({
    isDarkTheme: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTheme: () => {},
});

export { ThemeContext };
