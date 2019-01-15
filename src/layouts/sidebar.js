import React from 'react'
import { Flex, Box, Text, Link } from 'rebass'
import { ThemeProvider } from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import { Location } from '@reach/router'
import Sidebar from 'react-sidebar'
import NavLink from '../NavLink'

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

class SidebarState extends React.Component {
  state = {
    open: false,
    docked: true
  }
  update = fn => this.setState(fn)

  handleMedia = () => {
    console.log('handleMedia', this.media)
    this.setState({
      docked: this.media.matches,
      open: false
    })
  }

  componentDidMount () {
    this.media = window.matchMedia('screen and (min-width:40em)')
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
                <NavLink to='https://github.com/rebassjs/rebass' children='GitHub' />
                <NavLink to='https://jxnblk.com' children='Made by Jxnblk' />
              </Box>
            )}>
            {!docked && (
              <button
                onClick={e => {
                  e.preventDefault()
                  update(state => ({ open: !state.open }))
                }}
                children='Menu'
              />
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
