import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: ffcfcf75;
    height: 100vh;
    justify-content: flex-end;

    & > div { 
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 50%;
    }
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        & > div {
            width: 100%;
        }
      }
`;

export default Container 