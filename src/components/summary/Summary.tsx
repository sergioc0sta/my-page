import * as React from 'react';
import Container from '../container';
import Content from './Content';
import Description from './Description';

const Summary = () => {
    return (
        <Container>
            <Content>
                <Description />
            </Content>
        </Container>
    );
};

export default Summary;
