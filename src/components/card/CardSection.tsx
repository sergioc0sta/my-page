import React from 'react';

interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CardSection = ({ children, className = '', ...rest }: CardSectionProps): JSX.Element => {
    return (
        <div className={`flex flex-col gap-10 ${className}`.trim()} {...rest}>
            {children}
        </div>
    );
};

export default CardSection;
