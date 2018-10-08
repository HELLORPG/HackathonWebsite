'use strict'
module.exports = {
  siteMetadata: {
    title: 'Eastern China AJSHackathon',
    description: 'Website for Eastern China AJSHackathon by MSCs',
    siteUrl: 'https://ajshackathon.ml',
    author: {
      name: 'Chen Junda',
      url: 'https://viccrubs.tk',
      email: 'smallda@outlook.com'
    }
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-toc',
            options: {
              header: 'Table of Contents', // the custom header text,
              include: [
                'contents/**/*.md'
              ]
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://ajshackathon.ml'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /assets/
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "AJSHackathon",
        short_name: "AJSHackathon",
        start_url: "/",
        background_color: "#222222",
        theme_color: "#00bc8c",
        display: "minimal-ui",
        icon: "assets/icon.png", // This path is relative to the root of the site.
      },
    },
  ]
}
