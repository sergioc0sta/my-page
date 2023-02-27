import styled from '@emotion/styled';

const ListItem = styled.li`
    color: ${(props) => props.theme.colors.bullets};
    transition: color ${(props) => props.theme.transition.time};
    padding: 5px 0;
`;

export default ListItem;
