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
    siteUrl: 'https://rayleighko.github.io',
    description: 'Technical blog',
    pathPrefix: '/rayleighko.github.io',
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
        name: 'content',
        path: `${__dirname}/content/`,
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
    'gatsby-plugin-catch-links',
    'gatsby-plugin-emotion',
    'gatsby-plugin-favicon',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            maxWidth: 950,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-46190412-1',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://knpw.rs',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `{
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.html,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              ),
            query: `{
            allMarkdownRemark(
              limit: 1000,
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  html
                  frontmatter {
                    title
                    date
                    path
                  }
                }
              }
            }
          }`,
            output: '/rss.xml',
          },
        ],
      },
    },
  ],
}
