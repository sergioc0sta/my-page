import styled from '@emotion/styled';

const SummaryContent = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    border-radius: 20px;
    box-shadow: 10px 10px ${(props) => props.theme.colors.heading};

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: ${(props) => props.theme.breckPoints.small}) {
        width: auto;
        border-radius: 0px;
        box-shadow: none;
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: ${(props) => props.theme.breckPoints.small}) {
        width: 90%;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: ${(props) => props.theme.breckPoints.medium}) {
        width: 80%;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: ${(props) => props.theme.breckPoints.large}) {
        width: 75%;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: ${(props) => props.theme.breckPoints.extraLarge}) {
        width: 768px;
    }
`;

const Content = styled(SummaryContent)`
    border-radius: none;
    box-shadow: none;
`;

export { SummaryContent, Content };
