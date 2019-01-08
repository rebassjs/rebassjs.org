// root layout
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import { Helmet } from 'react-helmet'
import { Box, Heading } from 'rebass'
import LiveCode from '../LiveCode'
import theme from '../theme'

const Style = createGlobalStyle({
  body: {
    margin: 0
  }
})

const components = {
  h1: props => <Heading as='h1' fontSize={6} {...props} />,
  h2: props => <Heading as='h2' fontSize={5} {...props} />,
  h3: props => <Heading as='h2' fontSize={4} {...props} />,
  pre: props => props.children,
  code: LiveCode,
}

const ga = [
  <script
    key='ga1'
    async
    src='https://www.googletagmanager.com/gtag/js?id=UA-4603832-13'
  />,
  <script
    key='ga2'
    dangerouslySetInnerHTML={{
      __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-4603832-13');`
    }}
  />
]

export default props =>
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      <>
        <Helmet>
          <title>Rebass</title>
          <meta name='description' content='React UI component library & design system, built with styled-components and styled-system' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@jxnblk' />
          <meta name='twitter:title' content='Rebass' />
          <meta name='twitter:description' content='React UI component library & design system, built with styled-components and styled-system' />
          <meta name='twitter:image' content='https://rebassjs.org/card.png' />
          <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto+Mono' />
        </Helmet>
        <Style />
        <Box
          {...props}
          style={{
            fontFamily: 'system-ui, sans-serif',
            lineHeight: 1.5,
          }}
        />
      </>
    </MDXProvider>
  </ThemeProvider>
