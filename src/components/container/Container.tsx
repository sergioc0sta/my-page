import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Container = ({ children, className = '', ...rest }: ContainerProps): JSX.Element => {
    return (
        <section className={`page-section ${className}`.trim()} {...rest}>
            <div className="section-inner">{children}</div>
        </section>
    );
};

export default Container;
