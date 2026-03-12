import React from 'react';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    start?: boolean;
    children: React.ReactNode;
}

const Text = ({ start, children, className = '', ...rest }: TextProps): JSX.Element => {
    return (
        <p
            className={`m-0 text-lg leading-relaxed text-slate-700 transition-colors duration-500 dark:text-slate-300 sm:text-xl ${
                start ? 'indent-8' : ''
            } ${className}`.trim()}
            {...rest}
        >
            {children}
        </p>
    );
};

export default Text;
