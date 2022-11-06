import { useStaticQuery, graphql } from 'gatsby';

interface useWorkData {
    tags: string[];
    
}

const useWorkData = () => {
    const data = useStaticQuery(graphql`
        query WorkData {
            markdownRemark(fileAbsolutePath: { regex: "/Work.md/" }) {
                html
                frontmatter {
                    tags
                }
            }
        }
    `);
    return data.markdownRemark.frontmatter;
};

export default useWorkData;