import { ThemeContext } from '../../context/theme';
import { useContext } from 'react';
import styled from '@emotion/styled';

const StyleButton = styled.button`
    margin: 15px;
    background: ${(props) => props.theme.colors.background};
    transition: background ${(props) => props.theme.transition.time};
    border: none;
    cursor: pointer;
    font-size: 20px;
`;

const Button = (): JSX.Element => {
    const { setTheme, isDarkTheme } = useContext(ThemeContext);

    const emoji = isDarkTheme ? '☀️' : '🌑';
    return <StyleButton onClick={setTheme}>{emoji}</StyleButton>;
};

export default Button;
