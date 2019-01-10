import React from 'react'
import { Flex, Box, Link } from 'rebass'
import styled, { ThemeProvider } from 'styled-components'
import { graphql, StaticQuery, Link as GatsbyLink } from 'gatsby'
import { Location } from '@reach/router'
import Sidebar from 'react-sidebar'
import NavLink from '../NavLink'
import theme from '../theme'

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

const Pagination = ({
  navigation = []
}) =>
<Location
  children={({ location }) => {
    const i = navigation.findIndex(n => n.href === location.pathname)
    const previous = navigation[i - 1]
    const next = navigation[i + 1]
    return (
      <Flex>
        {previous && (
          <NavLink to={previous.href}>
            Previous
            {previous.text}
          </NavLink>
        )}
        <Box mx='auto' />
        {next && (
          <NavLink to={next.href}>
            Next
            {next.text}
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
