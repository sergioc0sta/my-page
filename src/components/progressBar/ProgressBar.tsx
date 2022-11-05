import styled from '@emotion/styled';

interface ProgressBarType {
    progress: number;
}

const ProgressBar = styled.div<ProgressBarType>`
    height: 100%;
    background: #bd93f9;
    width: ${(props) => `${props.progress}%`};
`;

export { ProgressBar };
