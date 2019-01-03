import React from 'react'
import styled from 'styled-components'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError,
} from 'react-live'
import * as Rebass from 'rebass'

const Editor = styled(LiveEditor)({
  backgroundColor: ''
})

export default ({
  className,
  ...props
}) => {
  if (/\.jsx/.test(className)) {
    const code = props.children
    return (
      <LiveProvider
        mountStylesheet={false}
        code={code}
        scope={Rebass}>
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    )
  }
  return <pre {...props} />
}
