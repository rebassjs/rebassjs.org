const HTMLPlugin = require('mdx-go/lib/html-plugin')

const babel = {
  presets: [
    'babel-preset-env',
    'babel-preset-stage-0',
    'babel-preset-react',
  ],
  plugins: []
}

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: require.resolve('babel-loader'),
      options: babel
    }
  },
  {
    test: /\.mdx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: babel
      },
      {
        loader: require.resolve('@mdx-js/loader'),
        options: {
          // mdPlugins
        }
      }
    ]
  }
]

module.exports = {
  mode: 'development',
  entry: [
    './src/entry.js'
  ],
  module: {
    rules,
  },
  plugins: [
    new HTMLPlugin()
  ]
}

