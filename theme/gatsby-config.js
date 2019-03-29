const remarkPlugins = [
  require('remark-unwrap-images'),
  require('remark-slug'),
]

module.exports = options => {
  const { navigation = [] } = options

  return {
    siteMetadata: {
      navigation
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-emotion',
      {
        resolve: 'gatsby-mdx',
        options: {
          extensions: [ '.mdx', '.md' ],
          remarkPlugins,
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
