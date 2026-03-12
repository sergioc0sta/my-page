import React from 'react';

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const SummaryContent = ({ children, className = '', ...rest }: ContentProps): JSX.Element => {
    return (
        <div className={`mx-auto flex w-full max-w-3xl flex-col gap-6 ${className}`.trim()} {...rest}>
            {children}
        </div>
    );
};

const Content = ({ children, className = '', ...rest }: ContentProps): JSX.Element => {
    return (
        <div className={`mx-auto flex w-full max-w-3xl flex-col gap-8 ${className}`.trim()} {...rest}>
            {children}
        </div>
    );
};

export { SummaryContent, Content };
