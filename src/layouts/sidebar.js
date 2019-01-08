import React from 'react'
import { Flex, Box, Link } from 'rebass'
import styled, { ThemeProvider } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import Sidebar from 'react-sidebar'
import NavLink from '../NavLink'
import theme from '../theme'

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

export default props =>
  <SidebarState
    render={({
      open,
      docked,
      update
    }) => (
      <Sidebar
        open={open}
        docked={docked}
        onSetOpen={open => update({ open })}
        shadow={false}
        defaultSidebarWidth={256}
        sidebar={(
          <Box
            width={[ 256 ]}
            px={0}
            py={4}
            style={{
              minHeight: '100vh'
            }}>
            <NavLink to='/' children='Home' />
            <NavLink to='/getting-started' children='Getting Started' />
            <NavLink to='/props' children='Props' />
            <NavLink to='/extending' children='Extending' />
            <NavLink to='/theming' children='Theming' />
            <NavLink to='/Box' children='Box' />
            <NavLink to='/Flex' children='Flex' />
            <NavLink to='/Text' children='Text' />
            <NavLink to='/Heading' children='Heading' />
            <NavLink to='/Button' children='Button' />
            <NavLink to='/Link' children='Link' />
            <NavLink to='/Image' children='Image' />
            <NavLink to='/Card' children='Card' />
            <NavLink to='/Advanced' children='Advanced' />
            <NavLink to='/Examples' children='Examples' />
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
        </Box>
      </Sidebar>
    )}
  />
