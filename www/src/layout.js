import React from 'react'
import { Sidebar } from '@rebass/gatsby-theme-docs'

export default props => {
  return (
    <Sidebar>
      {props.children}
    </Sidebar>
  )
}
