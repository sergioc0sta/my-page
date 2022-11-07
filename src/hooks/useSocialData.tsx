import { graphql, useStaticQuery } from 'gatsby';

interface SocialDataType {
    node: SocialDataType__node;
}

interface SocialDataType__node {
    description: string;
    title: string;
}

const useSocialData = (): SocialDataType => {
    const data = useStaticQuery(graphql`
        query SocialData {
            allSocialJson {
                edges {
                    node {
                        title
                        description
                    }
                }
            }
        }
    `);

    return data.allSocialJson.edges;
};

export default useSocialData;
