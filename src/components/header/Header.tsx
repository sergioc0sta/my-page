import { useEffect } from 'react';
import { ProgressBar } from './ProgressBar';
import {ProgressContainer} from './ProgressContainer'
import { useProgressBar } from './hooks/useProgressBar';


const Header = () => {
    const { scrollHandler } = useProgressBar();

    useEffect(() => {
        return () => (window.onscroll = () => null);
    }, []);

    return (
        <ProgressContainer>
            <ProgressBar id="progress-bar" loading={scrollHandler} />        
        </ProgressContainer>
    );

};

export default Header;
