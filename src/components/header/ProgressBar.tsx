import styled from '@emotion/styled';

const ProgressBar = styled.div`
    height: 100%;
    background: #bd93f9;
    width: ${(props: any) => `${props.loading}%`};
`;

export { ProgressBar };
