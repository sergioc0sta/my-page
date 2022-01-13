import styled from '@emotion/styled';

type PropsHeader = {
    summary?: boolean;
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: #282a36;
    height: ${(props: PropsHeader) =>
        props.summary ? `calc(var(--heightMainComponent) - var(--heightHeader))` : `var(--heightMainComponent)`};
    justify-content: center;
`;

export default Container;
