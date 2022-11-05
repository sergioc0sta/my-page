import * as React from 'react';
import styled from '@emotion/styled';
import { useSummaryData } from './hooks/useSummaryData';

const Ola = styled.div`
    width: auto;
    margin: 2rem;
`;

const Hendling = styled.h1`
    font-size: 30px;
    font-family: 'Concert One';
    color: #bd93f9;
    display: block;
    font-weight: bold;
`;

const Oi = styled.p`
    display: block;
    text-indent: ${(props: boolean) => `${props?.start ? 0: 30}px`};
    font-style:  ${(props: boolean) => `${props?.start ? 'italic': 'inither'}`};
    text-align: justify;
    text-justify: inter-word;
    font-weight: bold;
`;

const Description = () => {
    const { title, description, moreInfo } = useSummaryData();

    if (!description && !title) {
        return null;
    }

    return (
        <Ola>
            <Hendling>{title}</Hendling>
            <Oi>{description}</Oi>

            <Oi start>{moreInfo}</Oi>
        </Ola>
    );
};

export default Description;
