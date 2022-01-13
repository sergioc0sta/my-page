import styled from '@emotion/styled';

const ProgressBar = styled.div`
    height: 0.8rem;
    background: #bd93f9;
    width: ${(props: any) => `${props.loading}%`};
`;

export { ProgressBar };
