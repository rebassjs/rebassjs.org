module.exports = options => {
  const { navigation = [] } = options

  return {
    siteMetadata: {
      navigation
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-mdx',
        options: {
          extensions: [ '.mdx', '.md' ],
          defaultLayouts: {
            docs: require.resolve('./src/Sidebar.js')
          }
        }
      },
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: [
            '@rebass/gatsby-theme-docs',
          ]
        }
      },
    ],
  }
}
