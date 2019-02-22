import React from 'react'
import Root from './src/Root'

export const wrapRootElement = props =>
  <Root>
    {props.element}
  </Root>
