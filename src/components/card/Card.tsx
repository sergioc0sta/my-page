/* eslint-disable react/no-unknown-property */
import CardSection from './CardSection';
import { TitleTimeLine } from '../title';
import Date from '../date';
import Text from '../text';
import Span from '../span';
import styled from '@emotion/styled';

const CardContent = styled.div`
    margin: 0 15px 40px;
    color: ${(props) => props.theme.colors.text};
    transition: color ${(props) => props.theme.transition.time};
    border-radius: 8px;
`;

const ContentSpan = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
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
                    <Date dateRange={eachOne.node.dateRange} />
                    <Text>{eachOne.node.description}</Text>
                    <ContentSpan>
                        {eachOne.node.resource.map((resource: string) => (
                            <Span key={resource}>{resource}</Span>
                        ))}
                    </ContentSpan>
                </CardContent>
            ))}
        </CardSection>
    );
};

export default Card;
