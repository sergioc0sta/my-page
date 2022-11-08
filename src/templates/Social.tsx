import styled from '@emotion/styled';
import { Container } from '../components';
import { useSocialData } from '../hooks';
import { Title, Link, ListItem } from '../components';

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Social = (): JSX.Element => {
    const data = useSocialData();
    const [email, ...others] = data;

    return (
        <Container>
            <Content>
                <Title>I´m happy for you see my profile</Title>
                <ul>
                    <ListItem key={email.node.title}>
                        <Link href={`mailto:${email.node.description}`} target="_blank">
                            {email.node.title}
                        </Link>
                    </ListItem>
                    {others.map((eachOne) => (
                        <ListItem key={eachOne.node.title}>
                            <Link href={`${eachOne.node.description}`} target="_blank">
                                {eachOne.node.title}
                            </Link>
                        </ListItem>
                    ))}
                </ul>
            </Content>
        </Container>
    );
};

export default Social;
