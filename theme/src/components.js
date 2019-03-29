import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import { Box, Heading } from 'rebass'
import isAbsoluteURL from 'is-absolute-url'
import LiveCode from './live-code'
import Pre from './pre'
import inlineCode from './inline-code'
import Link from './link'

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

const UnstyledLink = styled.a({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  }
})

const heading = ({ as, ...defaults }) => ({
  children,
  id,
  ...props
}) =>
<Heading
  id={id}
  as={as}
  {...defaults}
  {...props}>
  <UnstyledLink href={'#' + id}>
    {children}
  </UnstyledLink>
</Heading>

const table = styled.table(
  props => ({
    borderColor: props.theme.colors.lightgray,
  }),
  {
  width: '100%',
  marginTop: '32px',
  marginBottom: '32px',
  borderCollapse: 'separate',
  borderSpacing: 0,
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
  h1: heading({ as: 'h1', fontSize: 6, mt: 4, mb: 2 }),
  h2: heading({ as: 'h2', fontSize: 5, mt: 4, mb: 2 }),
  h3: heading({ as: 'h3', fontSize: 4, mt: 4, mb: 2 }),
  h4: heading({ as: 'h4', fontSize: 3, mt: 4, mb: 2 }),
  h5: heading({ as: 'h5', fontSize: 2, mt: 4, mb: 2 }),
  h6: heading({ as: 'h6', fontSize: 1, mt: 4, mb: 2 }),
  a: Link,
  pre: props => props.children,
  inlineCode,
  code,
  table,
}

export default components
