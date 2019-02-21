module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/Root.js'),
      }
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: [ '.mdx', '.md' ],
        defaultLayouts: {
          default: require.resolve('./src/Sidebar.js')
        }
      }
    }
  ],
}
