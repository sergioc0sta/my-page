import styled from '@emotion/styled';
import { Container, SummaryContent, Title, Text } from '../components';
import { useSummaryData } from '../hooks';

const Anchor = styled.a`
    text-decoration: none;
`;

const Summary = (): JSX.Element | null => {
    const { title, description, moreInfo } = useSummaryData();

    return (
        <Container id="summary">
            <SummaryContent>
                <Title>{title}</Title>
                <Text start>{description}</Text>
                <Text>
                    <Anchor href="#work">{moreInfo}</Anchor>
                </Text>
            </SummaryContent>
        </Container>
    );
};

export default Summary;
