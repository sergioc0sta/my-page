import styled from '@emotion/styled';

const ButtonContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: right;
    background: ${(props) => props.theme.colors.background};;
    position: absolute;
`;

export default ButtonContainer;