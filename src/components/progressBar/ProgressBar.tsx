import styled from '@emotion/styled';

interface ProgressBarType {
    progress: number;
}

const ProgressBar = styled.div<ProgressBarType>`
    height: 100%;
    background: ${(props) => props.theme.colors.progressBar};
    width: ${(props) => `${props.progress}%`};
`;

export { ProgressBar };
