import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetadata {
    title: string;
    siteUrl: string;
    description: string;
    lang: string;
}

const useMetaData = (): SiteMetadata => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                    lang
                }
            }
        }
    `);

    return site.siteMetadata;
};

export default useMetaData;
