module.exports = {
  siteMetadata: {
    title: `Lilian Maa'Dhoor`,
    description: `Creación de personajes articulados, vesstuario y escenografía para cualquier técnica de teatro de títeres, teatro, stop motion y lambe lambe`,
    author: `Peli`,
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
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-graphcms',
      options: {        
        endpoint: 'https://api-us-east-1.graphcms.com/v2/ckk67oxwafbud01xxbs27dxdk/master',
        downloadLocalImages: true,
        buildMarkdownNodes: true,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `taller-personajes-articulados`,
        short_name: `Tatili`,
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
