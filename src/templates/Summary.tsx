import { Container, SummaryContent, Title, Text } from '../components';
import { useSummaryData } from '../hooks';
import { ThemeContext } from '../context/theme';
import { useContext } from 'react';

const Summary = (): JSX.Element | null => {
    const { title, description, moreInfo } = useSummaryData();
    const { setTheme } = useContext(ThemeContext);

    return (
        <Container id="summary">
            <SummaryContent>
                <Title>{title}</Title>
                <Text start>{description}</Text>
                <Text>
                    <a href="#work">{moreInfo}</a>
                </Text>
                <button onClick={setTheme}> clica </button>
            </SummaryContent>
        </Container>
    );
};

export default Summary;
