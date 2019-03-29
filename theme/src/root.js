// root layout
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import { Box, Heading, Link } from 'rebass'
import components from './components'
import theme from './theme'

const Style = createGlobalStyle({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    fontFamily: 'system-ui, sans-serif',
    lineHeight: 1.5,
  }
})

export default props =>
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      <Style />
      {props.children}
    </MDXProvider>
  </ThemeProvider>
