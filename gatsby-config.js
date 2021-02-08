require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
    resolve: `gatsby-source-airtable`,
    options: {
      apiKey: process.env.AIRTABLE_KEY, // may instead specify via env, see below
      concurrency: 5, // default, see using markdown and attachments for more information
      tables: [
        {
          baseId: process.env.AIRTABLE_BASE_ID,
          tableName: `Yokai`,
          tableView: `IntroSession`, // optional
          // queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optionally default is false - makes all records in this table a separate node type, based on your tableView, or if not present, tableName, e.g. a table called "Fruit" would become "allAirtableFruit". Useful when pulling many airtables with similar structures or fields that have different types. See https://github.com/jbolda/gatsby-source-airtable/pull/52.
        //   mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
        //   tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`], // optional, for deep linking to records across tables.
        //   separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
        //   separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
       },
        // {
        //   baseId: `YOUR_AIRTABLE_BASE_ID`,
        //   tableName: `Yokai`,
        //   tableView: `IntroSession` // optional
        //   // can leave off queryName, mapping or tableLinks if not needed
        // }
      ]
    }
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
