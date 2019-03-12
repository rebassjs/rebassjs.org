// root layout
import React from 'react'
import { Link as GLink } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import { Box, Heading, Link } from 'rebass'
import Slugger from 'github-slugger'
import isAbsoluteURL from 'is-absolute-url'
import LiveCode from './LiveCode'
import theme from './_theme'

const slugger = new Slugger()

const Style = createGlobalStyle({
  body: {
    margin: 0
  }
})

export const Pre = styled(Box)({
  fontFamily: '"Roboto Mono", Menlo, monospace',
  fontSize: '14px',
  outline: 'none',
  overflowX: 'auto',
  borderRadius: '2px',
})

Pre.defaultProps = {
  as: 'pre',
  p: '1em',
  my: 4,
  color: '#c0c',
  bg: '#f6f6ff',
}

const inlineCode = styled.code({
  fontFamily: '"Roboto Mono", Menlo, monospace',
  fontSize: '14px',
  paddingLeft: '2px',
  paddingRight: '2px',
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

const a = ({ href, ...props }) => isAbsoluteURL(href) || /^#/.test(href)
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

const table = styled.table({
  width: '100%',
  marginTop: '32px',
  marginBottom: '32px',
  borderCollapse: 'separate',
  borderSpacing: 0,
  borderColor: theme.colors.lightgray,
  '& th': {
    textAlign: 'left',
    verticalAlign: 'bottom',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingRight: '4px',
    paddingLeft: 0,
    borderColor: 'inherit',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid'
  },
  '& td': {
    textAlign: 'left',
    verticalAlign: 'top',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingRight: '4px',
    paddingLeft: 0,
    borderColor: 'inherit',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid'
  },
})

const components = {
  h1: withLink({ as: 'h1', fontSize: 6, mt: 4, mb: 2 }),
  h2: withLink({ as: 'h2', fontSize: 5, mt: 4, mb: 2 }),
  h3: withLink({ as: 'h3', fontSize: 4, mt: 4, mb: 2 }),
  h4: withLink({ as: 'h4', fontSize: 3, mt: 4, mb: 2 }),
  h5: withLink({ as: 'h5', fontSize: 2, mt: 4, mb: 2 }),
  h6: withLink({ as: 'h6', fontSize: 1, mt: 4, mb: 2 }),
  a,
  pre: props => props.children,
  inlineCode,
  code,
  table,
}

export default props =>
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      <>
        <Style />
        <div {...props} />
      </>
    </MDXProvider>
  </ThemeProvider>
