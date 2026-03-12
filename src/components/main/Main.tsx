import React from 'react';

interface MainProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

const Main = ({ children, className = '', ...rest }: MainProps): JSX.Element => {
    return (
        <main
            className={`relative flex min-h-screen flex-col bg-paper text-ink transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100 ${className}`}
            {...rest}
        >
            {children}
        </main>
    );
};

export default Main;
