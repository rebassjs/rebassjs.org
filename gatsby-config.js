const path = require('path')

module.exports = {
  // __experimentalThemes: [
  // { resolve: path.resolve('./gatsby-theme-mdx-docs'), options: {} }
  // ],

  siteMetadata: {
    title: 'Rebass',
    description: 'React primitive UI components built with styled-system',
    author: '@jxnblk',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    { resolve: 'gatsby-mdx',
      options: {
        extensions: [ '.mdx', '.md' ],
        defaultLayouts: {
          default: require.resolve('./src/layouts/sidebar.js')
        }
      }
    }
  ],
}
