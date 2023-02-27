import styled from '@emotion/styled';

const Link = styled.a`
    color: ${(props) => props.theme.colors.link};
    transition: color ${(props) => props.theme.transition.time};
`;

export default Link;
