import React from 'react'
import Root from './Root'
import Sidebar from './Sidebar'
import './styles.css'

export const wrapPageElement = ({ element, props }, opts) => {
  const isMDX = !!element.type.isMDXComponent

  if (props.location.pathname === '/' || !isMDX) {
    return (
      <Root>
        {element}
      </Root>
    )
  }

  return (
    <Root>
      <Sidebar>
        {element}
      </Sidebar>
    </Root>
  )
}

export {
  default as Root,
  Pre,
} from './Root'
export { default as Sidebar } from './Sidebar'
export { default as LiveCode } from './LiveCode'
export { default as NavLink } from './NavLink'
