// root layout
import React from 'react'
import { Link as GLink } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import { Helmet } from 'react-helmet'
import { Box, Heading, Link } from 'rebass'
import Slugger from 'github-slugger'
import isAbsoluteURL from 'is-absolute-url'
import LiveCode from '../LiveCode'
import theme from '../theme'

const slugger = new Slugger()

const Style = createGlobalStyle({
  body: {
    margin: 0
  }
})

const Pre = styled.pre({
  fontFamily: '"Roboto Mono", Menlo, monospace',
  fontSize: '14px',
  padding: '1em',
  marginTop: '32px',
  marginBottom: '32px',
  outline: 'none',
  overflowX: 'auto',
  borderRadius: '2px',
  color: '#c0c',
  backgroundColor: '#f6f6ff',
})

const code = ({
  className,
  ...props
}) => /\.jsx/.test(className) ? (
  <LiveCode
    {...props}
    code={props.children}
  />
) : (
  <Pre className={className} {...props} />
)

const a = ({ href, ...props }) => isAbsoluteURL(href)
  ? <Link href={href} {...props} />
  : <Link as={GLink} to={href} {...props} />

const UnstyledLink = styled.a({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  }
})

const withLink = ({ as, ...defaultProps }) => ({
  children,
  ...props
}) => {
  slugger.reset()
  const id = slugger.slug(children)
  return (
    <Heading
      id={id}
      as={as}
      {...defaultProps}
      {...props}>
      <UnstyledLink href={'#' + id}>
        {children}
      </UnstyledLink>
    </Heading>
  )
}

const components = {
  h1: withLink({ as: 'h1', fontSize: 6, mt: 4, mb: 2 }),
  h2: withLink({ as: 'h2', fontSize: 5, mt: 4, mb: 2 }),
  h3: withLink({ as: 'h3', fontSize: 4, mt: 4, mb: 2 }),
  h4: withLink({ as: 'h4', fontSize: 3, mt: 4, mb: 2 }),
  h5: withLink({ as: 'h5', fontSize: 2, mt: 4, mb: 2 }),
  h6: withLink({ as: 'h6', fontSize: 1, mt: 4, mb: 2 }),
  a,
  pre: props => props.children,
  code,
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
