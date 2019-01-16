import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Link } from 'rebass'
import { Link as GLink } from 'gatsby'

const NavLink = styled(Link)({
  display: 'block',
  textDecoration: 'none',
  fontWeight: 'bold',
}, props => ({
  '&[aria-current]': {
    color: themeGet('colors.blue')(props)
  }
}))

NavLink.defaultProps = {
  fontSize: 14,
  px: 2,
  py: 1,
  color: 'inherit',
}

const getProps = ({ isCurrent, className }) => isCurrent ? {
  className: className + ' active'
} : null

export default props =>
  <NavLink
    {...props}
    as={props.to ? GLink : 'a'}
  />
