import CardSection from './CardSection';
import { TitleTimeLine } from '../title';
import Text from '../text';
import Span from '../span';
import styled from '@emotion/styled';

const CardContent = styled.div`
    margin: 0 15px 40px;
    color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
`;

interface CardDataType {
    node: CardDataType__node;
}

interface CardDataType__node {
    title: string;
    dateRange: string;
    description: string;
    resource: string[];
}

const Card = ({ data }: { data: CardDataType }): JSX.Element => {

    return (
        <CardSection>
            {data.map((eachOne: CardDataType) => (
                <CardContent key={eachOne.node.title}>
                    <TitleTimeLine>{eachOne.node.title}</TitleTimeLine>
                    <Text>{eachOne.node.description}</Text>
                    <div>
                        {eachOne.node.resource.map((resource: string) => (
                            <Span key={resource}>{resource}</Span>
                        ))}
                    </div>
                </CardContent>
            ))}
        </CardSection>
    );
};

export default Card;
