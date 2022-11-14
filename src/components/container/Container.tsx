import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${(props) => props.theme.colors.background};
    height: 100vh;
`;

export default Container;
