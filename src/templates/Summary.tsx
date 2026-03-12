import React from 'react';
import { Container, SummaryContent, Title, Text } from '../components';
import { useSummaryData } from '../hooks';

const Summary = (): JSX.Element | null => {
    const { title, description } = useSummaryData();

    return (
        <Container id="summary" className="pt-28">
            <SummaryContent className="relative pb-16">
                <Title>{title}</Title>
                <Text start>{description}</Text>
                <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl font-light text-slate-900/85 animate-bounce dark:text-slate-100/85">
                    ↓
                </div>
            </SummaryContent>
        </Container>
    );
};

export default Summary;
