import styled from '@emotion/styled';

const Outer = styled.div`
    border-left: 3px dashed ${(props) => props.theme.colors.bullets};
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: ${(props) => props.theme.breckPoints.small}) {
        border-left: none;
    }
`;

export default Outer;
