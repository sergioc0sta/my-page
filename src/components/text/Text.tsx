import styled from '@emotion/styled';

interface TextTypes {
    start?: boolean;
}

const Text = styled.p<TextTypes>`
    display: block;
    text-indent: ${(props) => `${props?.start ? 0: 30}px`};
    font-style:  ${(props) => `${props?.start ? 'italic': 'inither'}`};
    text-align: justify;
    text-justify: inter-word;
    font-weight: bold;
`;

export default Text;