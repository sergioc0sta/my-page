import React from 'react';

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
}

const ListItem = ({ children, className = '', ...rest }: ListItemProps): JSX.Element => {
    return (
        <li
            className={`list-disc py-1 marker:text-accent dark:marker:text-orange-300 ${className}`.trim()}
            {...rest}
        >
            {children}
        </li>
    );
};

export default ListItem;
