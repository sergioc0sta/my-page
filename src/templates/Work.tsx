import styled from '@emotion/styled';
import { useWorkData } from '../hooks';
import { Container, WorkContent, Outer, Card} from '../components';

const ContainerWork = styled(Container)`
    height: 100%;
    margin: 2rem 0;
`;

const Work = (): JSX.Element => {
    const data = useWorkData();

    return (
        <ContainerWork>
            <WorkContent>
                <Outer>
                    <Card data={data} />
                </Outer>
            </WorkContent>
        </ContainerWork>
    );
};

export default Work;
