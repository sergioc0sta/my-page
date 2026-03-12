import React from 'react';

interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}

const Span = ({ children, className = '', ...rest }: SpanProps): JSX.Element => {
    return (
        <span
            className={`rounded-full px-3 py-1 text-sm font-semibold italic tracking-wide text-slate-600 transition-colors duration-500 dark:text-slate-300 sm:text-base ${className}`.trim()}
            {...rest}
        >
            {children}
        </span>
    );
};

export default Span;
