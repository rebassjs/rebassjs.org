import React from 'react'
import Root from './src/Root'

export const wrapRootElement = ({ element }) =>
  <Root>
    {element}
  </Root>
