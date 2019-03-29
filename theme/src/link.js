import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link } from '@rebass/emotion'
import isAbsoluteURL from 'is-absolute-url'

export default ({
  href,
  ...props
}) => isAbsoluteURL(href) || /^#/.test(href)
  ? <Link href={href} {...props} />
  : <Link as={GatsbyLink} to={href} {...props} />
