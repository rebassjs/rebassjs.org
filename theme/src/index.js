import React from 'react'
import Root from './Root'
import Sidebar from './Sidebar'

export const wrapPageElement = ({ element, props }, opts) => {
  if (props.location.pathname === '/') {
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
