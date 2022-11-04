import * as React from 'react';
import styled from '@emotion/styled';
import { useSummaryData } from './hooks/useSummaryData';

const Ola = styled.div`
    width: auto;
    margin: 2rem;
`;

const Hendling = styled.h1`
    display: block;
`;

const Oi = styled.p`
    display: block;
    text-indent: 30px;
    text-align: justify;
    text-justify: inter-word;
`;

const Description = () => {
    const { title, description } = useSummaryData();

    if (!description && !title) {
        return null;
    }

    return (
        <Ola>
            <Hendling>{title}</Hendling>
            <Oi>{description}</Oi>
        </Ola>
    );
};

export default Description;
