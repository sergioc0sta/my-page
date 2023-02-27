import styled from '@emotion/styled';

const Span = styled.span`
    color: ${(props) => props.theme.colors.link};
    transition: color ${(props) => props.theme.transition.time};
    margin: 0 5px;
    font-size: 14px;
`;

export default Span;
