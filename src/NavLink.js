import React from 'react'
import styled from 'styled-components'
import { Link } from 'rebass'
import { Link as GLink } from 'gatsby'

const NavLink = styled(Link)({
  display: 'block',
  textDecoration: 'none',
  fontWeight: 'bold',
})

NavLink.defaultProps = {
  fontSize: 14,
  px: 2,
  py: 1,
  color: 'inherit',
}

export default props =>
  <NavLink
    {...props}
    as={props.to ? GLink : 'a'}
  />
