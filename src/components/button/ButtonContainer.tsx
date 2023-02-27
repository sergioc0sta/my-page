import styled from '@emotion/styled';

const ButtonContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: right;
    background: ${(props) => props.theme.colors.background};
    transition: background ${(props) => props.theme.transition.time};
    position: absolute;
`;

export default ButtonContainer;
