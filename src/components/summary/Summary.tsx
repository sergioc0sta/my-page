import * as React from 'react';
import Container from '../container';
import Content from './Content';
import Avatar from './Avatar';
import Description from './Description';

const Summary = () => {
    return (
        <Container>
            <Content>
                <Avatar />
                <Description />
            </Content>
        </Container>
    );
};

export default Summary;
