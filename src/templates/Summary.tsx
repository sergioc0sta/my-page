import { css } from '@emotion/css';
import { Container, SummaryContent, Title, Text } from '../components';
import { useSummaryData } from '../hooks';

const Summary = (): JSX.Element | null => {
    const { title, description, moreInfo } = useSummaryData();

    if (!description && !title && !moreInfo) {
        return null;
    }

    return (
        <Container>
            <SummaryContent>
                <div
                    className={css`
                        width: auto;
                        margin: 2rem;
                    `}
                >
                    <Title>{title}</Title>
                    <Text start>{description}</Text>
                    <Text>{moreInfo}</Text>
                </div>
            </SummaryContent>
        </Container>
    );
};

export default Summary;
