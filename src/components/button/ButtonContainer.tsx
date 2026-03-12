import React from 'react';

interface ButtonContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const ButtonContainer = ({ children, className = '', ...rest }: ButtonContainerProps): JSX.Element => {
    return (
        <div
            className={`fixed right-4 top-4 z-30 flex justify-end bg-transparent sm:right-8 sm:top-6 ${className}`.trim()}
            {...rest}
        >
            {children}
        </div>
    );
};

export default ButtonContainer;
