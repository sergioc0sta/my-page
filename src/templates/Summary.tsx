//import { css } from '@emotion/css';
import { Container, SummaryContent, Title, Text } from '../components';
import { useSummaryData } from '../hooks';

const Summary = (): JSX.Element | null => {
    const { title, description, moreInfo } = useSummaryData();

    return (
        <Container>
            <SummaryContent>
                <Title>{title}</Title>
                <Text start>{description}</Text>
                <Text>
                    <a href="#work">{moreInfo}</a>
                </Text>
            </SummaryContent>
        </Container>
    );
};

export default Summary;
