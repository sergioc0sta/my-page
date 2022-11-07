import { useStaticQuery, graphql } from 'gatsby';

interface WorkDataType {
    node: WorkDataType__node;
}

interface WorkDataType__node {
    title: string
    dateRange: string
    description: string
    resource: string[]
}

const useWorkData = ():WorkDataType => {
    const data = useStaticQuery(graphql`
        query WorkData {
            allWorkJson {
                edges {
                    node {
                        title
                        dateRange
                        description
                        resource
                    }
                }
            }
        }
    `);
    return data.allWorkJson.edges;
};

export default useWorkData;
