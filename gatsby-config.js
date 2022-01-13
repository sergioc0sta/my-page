const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');

module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },
    plugins: [
      {
        resolve: "gatsby-plugin-prettier-eslint",
        // this is the default configuration, override only what you need
        options: {
          cwd: process.cwd(), // path to a directory that should be considered as the current working directory
          watch: true, // format/lint on save
          initialScan: true, // if true, will format/lint the whole project on Gatsby startup
          onChangeFullScanLint: false, // if true, on file save always perform full scan lint
          onChangeFullScanFormat: false, // if true, on file save always perform full scan format
          prettierLast: false, // if true, will run Prettier after ESLint
          ignorePatterns: [
            "**/node_modules/**/*",
            "**/.git/**/*",
            "**/dist/**/*",
            ".cache/**/*",
            "public/**/*",
          ], // string or array of paths/files/globs to ignore
          prettier: {
            patterns: [], // string or array of paths/files/globs to include related only to Prettier
            ignorePatterns: [], // string or array of paths/files/globs to exclude related only to Prettier
            customOptions: {}, // see: https://prettier.io/docs/en/options.html
          },
          eslint: {
            patterns: [], // string or array of paths/files/globs to include related only to ESLint
            ignorePatterns: [], // string or array of paths/files/globs to exclude related only to ESLint
            formatter: "stylish", // set custom or third party formatter
            maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
            emitWarning: true, // if true, will emit lint warnings
            failOnError: false, // if true, any lint error will fail the build, you may set true only in your prod config
            failOnWarning: false, // same as failOnError but for warnings
            plugins: [], // an array of plugins to load for ESLint
            customOptions: {}, // see: https://eslint.org/docs/developer-guide/nodejs-api#cliengine
          },
        },
      },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                // Gatsby required rules directory
                rulePaths: [gatsbyRequiredRules],
                // Default settings that may be ommitted or customized
                stages: ['develop'],
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: ['node_modules', 'bower_components', '.cache', 'public'],
                // Any additional eslint-webpack-plugin options below
                // ...
            },
        },
        `gatsby-plugin-graphql-loader`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/data`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
