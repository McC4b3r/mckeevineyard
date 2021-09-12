/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/actualPics`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `KoHo`,
          'Texturina',
          'IBM Plex Sans'
        ],
        display: 'swap'
      }
    },
  ],
}
