import styled from '@emotion/styled';

const CardSection = styled.div`
    margin: 0 15px 0;
    color: ${(props) => props.theme.colors.text};
    transition: color ${(props) => props.theme.transition.time};
    border-radius: 8px;
`;

export default CardSection;
