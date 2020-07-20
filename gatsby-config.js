/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: "gatsby tutorial",
    description: "some random description",
    author: "Miguel Fernando Patino",
    data: ["item 1", "item 2"],
    person: { name: "peter", age: "32" },
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3o2914b2zflq`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCES_TOKEN,
      },
    },
  ],
}
