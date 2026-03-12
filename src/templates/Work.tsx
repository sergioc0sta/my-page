import React from 'react';
import { useWorkData } from '../hooks';
import { Container, Content, Outer, Card } from '../components';

const Work = (): JSX.Element => {
    const data = useWorkData();

    return (
        <Container id="work">
            <Content>
                <Outer>
                    <Card data={data} />
                </Outer>
            </Content>
        </Container>
    );
};

export default Work;
