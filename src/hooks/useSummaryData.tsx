import { useStaticQuery, graphql } from 'gatsby';

interface SummaryDataType {
    title: string;
    description: string;
    moreInfo: string;
}

const useSummaryData = (): SummaryDataType => {
    const data = useStaticQuery(graphql`
        query SummaryData {
            markdownRemark(fileAbsolutePath: { regex: "/Summary.md/" }) {
                html
                frontmatter {
                    title
                    description
                    moreInfo
                }
            }
        }
    `);
    return data.markdownRemark.frontmatter;
};

export default useSummaryData;
