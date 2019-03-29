import React from 'react'
import Root from './root'

export { default as Root } from './root'
export { default as Sidebar } from './sidebar'
export { default as LiveCode } from './live-code'
export { default as Pre } from './pre'
export { default as Link } from './link'
export { default as NavLink } from './nav-link'

export const wrapRootElement = ({ element, props }, opts) =>
  <Root>
    {element}
  </Root>
