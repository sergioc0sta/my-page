const theme = {
    colors: {
        bullets: '#9555ff',
        link: '#2d9de5',
        heading: '#f49436',
        progressBar: '#3bbdbd',
        text: '#f9f4de',
        background: '#272943',
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
        bullets: '#9555ff',
        link: '#2d9de5',
        heading: '#f49436',
        progressBar: '#3bbdbd',
        text: '#272943',
        background: '#f9f4de',
    },
};
export { theme, themeLight };
