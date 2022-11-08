import styled from '@emotion/styled';

interface TextTypes {
    start?: boolean;
}

const Text = styled.p<TextTypes>`
    text-indent: ${(props) => `${props?.start ? 30 : 0}px`};
    text-align: justify;
    text-justify: ${(props) => `${props?.start ? 'inter-word' : 'inither'}`};
    color: ${(props) => props.theme.colors.primary};
    margin: 15px;
`;

export default Text;
