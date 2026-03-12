import React from 'react';
import CardSection from './CardSection';
import { TitleTimeLine } from '../title';
import Date from '../date';
import Text from '../text';
import Span from '../span';
interface CardDataType {
    node: CardDataType__node;
}

interface CardDataType__node {
    title: string;
    dateRange: string;
    description: string;
    resource: string[];
}

const Card = ({ data }: { data: CardDataType[] }): JSX.Element => {
    return (
        <CardSection>
            {data.map((eachOne: CardDataType) => (
                <article
                    key={eachOne.node.title}
                    className="flex flex-col pb-10 last:pb-0"
                >
                    <div className="flex flex-col gap-1.5">
                        <TitleTimeLine>{eachOne.node.title}</TitleTimeLine>
                        <Date dateRange={eachOne.node.dateRange} />
                        <Text>{eachOne.node.description}</Text>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {eachOne.node.resource.map((resource: string) => (
                            <Span key={resource}>{resource}</Span>
                        ))}
                    </div>
                </article>
            ))}
        </CardSection>
    );
};

export default Card;
