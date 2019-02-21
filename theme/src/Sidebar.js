import React from 'react'
import { Flex, Box, Text, Link } from 'rebass'
import styled, { ThemeProvider } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Location } from '@reach/router'
import Sidepane from 'sidepane'
import NavLink from './NavLink'
import { Burger } from 'reline'

const query = graphql`
  query SidebarQuery {
    site {
      siteMetadata {
        rebassTheme {
          navigation {
            text
            href
          }
        }
      }
    }
  }
`

const breakpoint = 'screen and (min-width:40em)'

const initialMQ = typeof window !== 'undefined'
  ? window.matchMedia(breakpoint)
  : { matches: false }

const removeSlash = str => str.replace(/\/$/, '')

const Pagination = ({
  navigation = []
}) =>
<Location
  children={({ location }) => {
    const i = navigation.findIndex(n => n.href === removeSlash(location.pathname))
    const previous = navigation[i - 1]
    const next = navigation[i + 1]

    if (i < 0) return false

    return (
      <Flex py={4}>
        {previous && (
          <NavLink to={previous.href}>
            <Text fontSize={0}>
              Previous
            </Text>
            <Text fontSize={3}>
              {previous.text}
            </Text>
          </NavLink>
        )}
        <Box mx='auto' />
        {next && (
          <NavLink to={next.href}>
            <Text fontSize={0}>
              Next
            </Text>
            <Text fontSize={3}>
              {next.text}
            </Text>
          </NavLink>
        )}
      </Flex>
    )
  }}
/>

const MenuButton = styled.button({
  position: 'fixed',
  top: 0,
  left: 0,
  appearance: 'none',
  padding: '8px',
  margin: 0,
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  outline: 'none',
  '&:focus': {
    color: 'magenta',
    outline: '1px solid magenta'
  }
})

export default props => {
  const { site } = useStaticQuery(query)
  const { navigation } = site.siteMetadata.rebassTheme

  return (
    <Flex>
      <Sidepane>
        <Box
          width={[ 256 ]}
          px={2}
          py={3}
          bg='white'
          style={{
            minHeight: '100vh'
          }}>
          {navigation.map(({ text, href }) => (
            <NavLink
              key={href}
              to={href}
              children={text}
            />
          ))}
          <Box my={4} />
          <NavLink href='https://github.com/rebassjs/rebass' children='GitHub' />
          <NavLink href='https://jxnblk.com' children='Made by Jxnblk' />
        </Box>
      </Sidepane>
      <Box
        {...props}
        mx='auto'
        px={4}
        py={4}
        width={1}
        style={{
          maxWidth: 768,
          minHeight: '100vh',
        }}>
        {props.children}
        <Pagination navigation={navigation} />
      </Box>
    </Flex>
  )
}
