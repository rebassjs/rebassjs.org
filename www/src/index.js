import React from 'react'
import { Sidebar } from '@rebass/gatsby-theme-docs'
import navigation from './navigation'

export const wrapPageElement = ({ element, props }) => {
  if (props.location.pathname === '/') return element

  return (
    <Sidebar
      navigation={navigation}>
      {element}
    </Sidebar>
  )
}
