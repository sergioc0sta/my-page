import styled from '@emotion/styled';

const Card = styled.div`
    margin: 0 0 10px 10px;
    padding: 5px;
    background: ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
`;

export default Card;
