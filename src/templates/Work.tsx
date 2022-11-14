import styled from '@emotion/styled';
import { useWorkData } from '../hooks';
import { Container, Content, Outer, Card } from '../components';

const ContainerWork = styled(Container)`
    height: 100%;
    margin: 2rem 0;
`;

const Work = (): JSX.Element => {
    const data = useWorkData();

    return (
        <ContainerWork id="work">
            <Content>
                <Outer>
                    <Card data={data} />
                </Outer>
            </Content>
        </ContainerWork>
    );
};

export default Work;
