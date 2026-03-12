import React from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

const Title = ({ children, className = '', ...rest }: TitleProps): JSX.Element => {
    return (
        <h1
            className={`m-0 text-5xl font-extrabold tracking-tight text-slate-900 transition-colors duration-500 dark:text-slate-100 sm:text-6xl ${className}`.trim()}
            {...rest}
        >
            {children}
        </h1>
    );
};

const TitleTimeLine = ({ children, className = '', ...rest }: TitleProps): JSX.Element => {
    return (
        <h2
            className={`relative m-0 pl-6 text-3xl font-bold text-slate-900 transition-colors duration-500 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:content-[''] dark:text-slate-100 dark:before:bg-orange-300 sm:text-4xl ${className}`.trim()}
            {...rest}
        >
            {children}
        </h2>
    );
};

export { Title, TitleTimeLine };
