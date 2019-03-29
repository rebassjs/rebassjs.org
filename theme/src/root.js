// root layout
import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { MDXProvider } from '@mdx-js/tag'
import components from './components'
import theme from './theme'

const style = (
  <Global
    styles={{
      '*': {
        boxSizing: 'border-box',
      },
      body: {
        margin: 0,
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.5,
      }
    }}
  />
)

export default props =>
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      {style}
      {props.children}
    </MDXProvider>
  </ThemeProvider>
