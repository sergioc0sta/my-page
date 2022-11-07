import { useStaticQuery, graphql } from 'gatsby';

interface SummaryDataType {
    title: string;
    description: string;
    moreInfo: string;
}

const useSummaryData = ():SummaryDataType => {
    const data = useStaticQuery(graphql`
        query SummaryData {
            allSummaryJson {
                edges {
                    node {
                        title
                        description
                        moreInfo
                    }
                }
            }
        }
    `);
    return data.allSummaryJson.edges[0].node;
};

export default useSummaryData;
