import React from 'react'
import { Flex, Box, Link } from 'rebass'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

// this is a pretty confusing API...
import Sidebar from 'react-sidebar'
// import Component from '@reach/component-component'

const mq = window.matchMedia('screen and (min-width:40em)')

class SidebarState extends React.Component {
  state = {
    open: false,
    docked: mq.matches,
  }
  update = fn => this.setState(fn)

  handleMedia = () => {
    console.log('handleMedia', mq)
    this.setState({
      docked: mq.matches,
      open: false
    })
  }

  componentDidMount () {
    mq.addListener(this.handleMedia)
  }

  componentWillUnmount () {
    mq.removeListener(this.handleMedia)
  }

  render () {
    return this.props.render({
      ...this.state,
      update: this.update,
    })
  }
}

/*
const xSidebar = styled(Box)({
  '@media screen and (max-width: 40em)': {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    transform: 'translateX(-100%)',
  }
})
*/

const NavLink = styled(Link)({
  display: 'block',
  textDecoration: 'none',
  fontWeight: 'bold',
})

NavLink.defaultProps = {
  as: GatsbyLink,
  px: 2,
  py: 1,
  color: 'inherit',
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
        sidebar={(
          <Box
            bg='#f6f6f6'
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
          <pre>{mq.matches ? 'desktop' : 'mobile'}</pre>
          {props.children}
        </Box>
      </Sidebar>
    )}
  />
