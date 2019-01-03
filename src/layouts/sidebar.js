import React from 'react'
import { Flex, Box, Link } from 'rebass'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const Sidebar = styled(Box)({
  '@media screen and (max-width: 40em)': {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    transform: 'translateX(-100%)',
  }
})

const NavLink = styled(Link)({
  display: 'block',
  textDecoration: 'none',
  fontWeight: 'bold',
})

NavLink.defaultProps = {
  as: GatsbyLink,
  px: 2,
  py: 1,
}

export default props =>
  <Flex>
    <Sidebar
      bg='#f6f6f6'
      width={[ 256 ]}
      px={0}
      py={4}>
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
    </Sidebar>
    <Box
      {...props}
      mx='auto'
      px={4}
      py={4}
      width={1}
      style={{
        maxWidth: 768,
        minHeight: '100vh',
      }}
    />
  </Flex>
