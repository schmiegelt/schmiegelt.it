/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `schmiegelt.it`,
    description: `Schmiegelt familiy landing page`,
    author: `Philip Schmiegelt`,
    twitterUsername: "@p_schmiegelt",
    image: "/twitter-img.png",
    siteUrl: "https://schmiegelt.it",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ],
}
