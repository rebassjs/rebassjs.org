
# Advanced

## Server-Side Rendering

Rebass works with server-side rendering in both styled-components and emotion.

### Styled Components

```js
const React = require('react')
const { renderToString } = require('react-dom/server')
const { ServerStyleSheet } = require('styled-components')
const App = require('./App')

module.exports = (req, res) => {
  const sheet = new ServerStyleSheet()
  const body = renderToString(
    sheet.collectStyles(
      React.createElement(App)
    )
  )
  const css = sheet.getStyleTags()

  // handle response...
}
```

Read more in the [styled-components docs](https://www.styled-components.com/docs/advanced#server-side-rendering).

### Emotion

```js
const React = require('react')
const { renderToString } = require('react-dom/server')
const { renderStylesToString } = require('emotion-server')
const App = require('./App')

const html = renderStylesToString(
  renderToString(
    React.createElement(App)
  )
)
```

Read more in the [emotion docs](https://emotion.sh/docs/ssr)
