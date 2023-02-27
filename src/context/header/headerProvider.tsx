import React from 'react';
import { useProgressBar } from '../../hooks';
import { HeaderContext } from './headerContext';

const HeaderProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const { scrollHandler } = useProgressBar();

    return <HeaderContext.Provider value={{ scrollHandler }}>{children}</HeaderContext.Provider>;
};

export { HeaderProvider };
