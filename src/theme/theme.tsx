const theme = {
    colors: {
        purple: '#9555ff',
        blue: '#2d9de5',
        orange: '#f49436',
        sea: '#3bbdbd',
        red: '#e8615d',
        primary: '#f9f4de',
    },
    breckPoints: {
        small: '600px',
        medium: '768px',
        large: '992px',
        extraLarge: '1200px',
    },
    fonts: {
        primary: 'Open Sans',
        title: 'Concert One',
    },
};

const themeLight = {
    ...theme,
    colors: {
        purple: '#9555ff',
        blue: '#2d9de5',
        orange: '#f49436',
        sea: '#3bbdbd',
        red: '#e8615d',
        primary: '#272943',
    },
};
export { theme, themeLight };
