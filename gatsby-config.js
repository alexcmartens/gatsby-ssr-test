/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
})

console.log('CONTENTFUL_ACCESS_TOKEN', process.env.CONTENTFUL_ACCESS_TOKEN)
console.log('CONTENTFUL_SPACE_ID', process.env.CONTENTFUL_SPACE_ID)
console.log('CONTENTFUL_BRANCH', process.env.CONTENTFUL_BRANCH)

module.exports = {
  siteMetadata: {
    title: `gatsby-ssr-test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID,
      "environment": process.env.CONTENTFUL_BRANCH
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-netlify"]
};