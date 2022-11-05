import styled from '@emotion/styled';

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    border: solid #99ff33;
    border-radius: 15px 0px;
    border-width: 3px 0px 0px 3px;
    box-shadow: 15px 15px #bd93f9;

    @media screen and (max-width: 1200px) {
        width: 60%;
    }

    @media screen and (max-width: 900px) {
        width: 70%;
    }

    @media screen and (min-width: 1800px) {
        width: 900px;
    }

    @media screen and (max-width: 1800px) {
        width: 50%;
    }
`;

export default Content;
