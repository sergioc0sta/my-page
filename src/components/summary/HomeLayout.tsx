import styled  from '@emotion/styled'

const HomeLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 50%;
    gap:2rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }
`;

export default HomeLayout;