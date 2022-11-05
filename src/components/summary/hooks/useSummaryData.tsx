import { useStaticQuery, graphql } from 'gatsby';

const useSummaryData = () => {
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

export { useSummaryData };
