import { ThemeContext } from '../context/theme';
import { useContext } from 'react';
import styled from '@emotion/styled';

const MainButton = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: right;
    background: ${(props) => props.theme.colors.background};;
    position: absolute;
`;
const Button = styled.button`
    margin: 15px;
    background: ${(props) => props.theme.colors.background};;
    border: none;
    cursor: pointer;
    font-size: 20px;
`;

const ThemeSelector = () => {
    const { setTheme, isDarkTheme } = useContext(ThemeContext);

    const emoji = isDarkTheme ? '☀️' : '🌑';
    return (
        <MainButton>
            <Button onClick={setTheme}>{emoji}</Button>
        </MainButton>
    );
};

export default ThemeSelector;
