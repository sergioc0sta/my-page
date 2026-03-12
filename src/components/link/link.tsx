import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
}

const Link = ({ children, className = '', ...rest }: LinkProps): JSX.Element => {
    return (
        <a
            className={`font-semibold underline decoration-2 underline-offset-4 transition-colors duration-300 hover:text-accent dark:hover:text-orange-300 ${className}`.trim()}
            {...rest}
        >
            {children}
        </a>
    );
};

export default Link;
