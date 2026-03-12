/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                paper: '#f6f4ee',
                ink: '#111827',
                accent: '#c2410c',
            },
        },
    },
    plugins: [],
};
