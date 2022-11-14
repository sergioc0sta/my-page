import type { GatsbyConfig } from 'gatsby';
import path from 'path';
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');

const config: GatsbyConfig = {
    siteMetadata: {
        title: `SergioCosta`,
        siteUrl: `https://sergiocosta.gatsbyjs.io`,
        description: `My personal page with my social media, work, and a quick explanation of who I am`,
        lang: `en`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        'gatsby-transformer-json',
        'gatsby-transformer-remark',
        'gatsby-plugin-emotion',
        'gatsby-plugin-sitemap',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                // Gatsby required rules directory
                rulePaths: [gatsbyRequiredRules],
                // Default settings that may be ommitted or customized
                stages: ['develop'],
                extensions: ['ts', 'tsx'],
                exclude: ['node_modules', 'bower_components', '.cache', 'public'],
                // Any additional eslint-webpack-plugin options below
                // ...
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Concert One`,
                        file: `https://fonts.googleapis.com/css2?family=Concert+One&display=swap`,
                    },
                    {
                        name: `Open Sans`,
                        file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap`,
                    },
                ],
            },
        },
    ],
};

export default config;
