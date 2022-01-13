import React, { useRef, useEffect, useMemo } from 'react';
import { HeaderBar } from './HeaderBar';
import { ProgressBar } from './ProgressBar';
import { ProgressContainer } from './ProgressContainer';
import { useProgressBar } from './hooks/useProgressBar';

const Header = () => {
    const { scrollHandler } = useProgressBar();

    useEffect(() => {
        return () => (window.onscroll = () => null);
    }, []);

    return (
        <HeaderBar>
            <ProgressContainer>
                <ProgressBar id="progress-bar" loading={scrollHandler} />
            </ProgressContainer>
        </HeaderBar>
    );
};

export default Header;
