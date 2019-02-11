// Initialize dotenv
require('dotenv').config({
  path: '.env', // or '.env'
})

// And then you can use the config in gatsby-config.js
const config = require('gatsby-plugin-config')

module.exports = {
  siteMetadata: {
    title: 'RayLog',
    author: 'Rayleigh Ko',
    description: 'Technical blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'queries',
        path: `${__dirname}/src/queries/`,
      },
    },
    {
      resolve: '@wyze/gatsby-source-graphql',
      options: {
        headers: {
          authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        url: 'https://api.github.com/graphql',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
