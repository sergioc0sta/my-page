import { useContext } from 'react';
import { ProgressBar, ProgressContainer } from '../components';
import { HeaderContext } from '../context/header';

const Header = (): JSX.Element => {
    const { scrollHandler } = useContext(HeaderContext);

    return (
        <ProgressContainer>
            <ProgressBar id="progress-bar" progress={scrollHandler} />
        </ProgressContainer>
    );
};

export default Header;
