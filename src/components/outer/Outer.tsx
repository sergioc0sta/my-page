import React from 'react';

interface OuterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Outer = ({ children, className = '', ...rest }: OuterProps): JSX.Element => {
    return (
        <div className={`flex flex-col pl-6 sm:pl-8 ${className}`.trim()} {...rest}>
            {children}
        </div>
    );
};

export default Outer;
