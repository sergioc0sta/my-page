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


    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        width: auto;
    }
    
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        width: 90%;
    }
    
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        width: 80%;
    }
    
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        width: 75%;
    }
    
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        width: 768px;
    } 
`;

export default Content;
