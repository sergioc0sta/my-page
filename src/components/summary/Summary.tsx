import Container from '../container';
import Content from './Content';
import Description from './Description';

const Summary = (): JSX.Element => {
    return (
        <Container>
            <Content>
                <Description />
            </Content>
        </Container>
    );
};

export default Summary;
