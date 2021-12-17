import styled from "@emotion/styled";

const HeaderLayout = styled.header`
    z-index: 1;
    background: var(--backgroundHeader);
    position: sticky;
    top:0;
   
    & > div {
        margin: 0 auto;
        width: 75vw;
        height: var(--heightHeader);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        @media only screen and (max-width: 600px) {
            justify-content: center;
        }
    }
`;

const Title = styled.h1`
    margin: 0; 
    color: #bd93f9; 
`;


export { HeaderLayout, Title };

