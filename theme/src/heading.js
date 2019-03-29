import React from 'react'
import styled from '@emotion/styled'
import { Heading } from '@rebass/emotion'

const UnstyledLink = styled.a({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  }
})

export default ({ as, ...defaults }) => ({
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
