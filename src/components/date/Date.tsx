import React from 'react';

type DateType = {
    dateRange: string;
    className?: string;
};

const Date = ({ dateRange, className = '' }: DateType): JSX.Element => {
    return (
        <p
            className={`m-0 text-right text-base font-semibold uppercase tracking-wide text-slate-500 transition-colors duration-500 dark:text-slate-400 sm:text-lg ${className}`.trim()}
        >
            {dateRange}
        </p>
    );
};

export default Date;
