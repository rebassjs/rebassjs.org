import React from 'react'
import { Flex, Box, Text, Link } from 'rebass'
import styled, { ThemeProvider } from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import { Location } from '@reach/router'
import Sidebar from 'react-sidebar'
import NavLink from '../NavLink'
import { Burger } from 'reline'

const query = graphql`
  query SidebarQuery {
    site {
      siteMetadata {
        navigation {
          text
          href
        }
      }
    }
  }
`

const breakpoint = 'screen and (min-width:40em)'

const initialMQ = typeof window !== 'undefined'
  ? window.matchMedia(breakpoint)
  : { matches: false }

class SidebarState extends React.Component {
  state = {
    open: false,
    docked: initialMQ.matches
  }

  update = fn => this.setState(fn)

  handleMedia = () => {
    this.setState({
      docked: this.media.matches,
      open: false
    })
  }

  componentDidMount () {
    this.media = window.matchMedia(breakpoint)
    this.media.addListener(this.handleMedia)
  }

  componentWillUnmount () {
    this.media.removeListener(this.handleMedia)
  }

  render () {
    return this.props.render({
      ...this.state,
      update: this.update,
    })
  }
}

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

export default props =>
  <SidebarState
    render={({
      open,
      docked,
      update
    }) => (
      <StaticQuery
        query={query}
        render={({ site }) => (
          <Sidebar
            open={open}
            docked={docked}
            onSetOpen={open => update({ open })}
            shadow={false}
            defaultSidebarWidth={256}
            sidebar={(
              <Box
                width={[ 256 ]}
                px={2}
                py={3}
                bg='white'
                style={{
                  minHeight: '100vh'
                }}>
                {site.siteMetadata.navigation.map(({ text, href }) => (
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
            )}>
            {!docked && (
              <MenuButton
                onClick={e => {
                  e.preventDefault()
                  update(state => ({ open: !state.open }))
                }}
                title='Menu'>
                <Burger />
              </MenuButton>
            )}
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
              <Pagination {...site.siteMetadata} />
            </Box>
          </Sidebar>
        )}
      />
    )}
  />
