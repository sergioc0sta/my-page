import styled from "@emotion/styled";

const HeaderLayout = styled.header`
    z-index: 1;
    background: var(--backgroundHeader);
    position: sticky;
    top:0;
    & > div {
        margin: 0 auto;
        width: 75vw;
        padding: 1.45rem 1.0875rem;
    }
`;

const Title = styled.h1`
    margin: 0; 
    color: #bd93f9; 
`;


export { HeaderLayout, Title };

