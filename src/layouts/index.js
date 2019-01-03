// root layout
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import { Box, Heading } from 'rebass'
import LiveCode from '../LiveCode'

const Style = createGlobalStyle({
  body: {
    margin: 0
  }
})

const theme = {}

const components = {
  h1: props => <Heading as='h1' fontSize={6} {...props} />,
  h2: props => <Heading as='h2' fontSize={5} {...props} />,
  h3: props => <Heading as='h2' fontSize={4} {...props} />,
  pre: props => props.children,
  code: LiveCode,
}

export default props =>
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      <>
        <Style />
        <Box
          {...props}
          style={{
            fontFamily: 'system-ui, sans-serif',
          }}
        />
      </>
    </MDXProvider>
  </ThemeProvider>
