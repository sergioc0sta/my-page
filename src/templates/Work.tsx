import styled from '@emotion/styled';
import { useWorkData } from '../hooks';
import { Container, WorkContent, Outer, Card, TitleTimeLine, Text } from '../components';

const Merda = styled(Container)`
    height: auto;
    margin: 10px 0;
`;

const Work = ():JSX.Element => {
    const data = useWorkData()
    console.log("🚀 ~ file: Work.tsx ~ line 12 ~ Work ~ title", data)

    return (
        <Merda>
            <WorkContent>
                <Outer>
                    <Card>
                        <TitleTimeLine>Title 1</TitleTimeLine>
                        <Text>
                            alsndlkanlskdnlaknsdasd
                        </Text>
                    </Card>
                    <Card>
                        <TitleTimeLine>Title 2</TitleTimeLine>
                        <Text>
                            alsdnlasndlansldankld
                        </Text>
                    </Card>
                </Outer>
            </WorkContent>
        </Merda>
    );
};

export default Work;
