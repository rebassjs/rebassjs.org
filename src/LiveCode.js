import React from 'react'
import styled from 'styled-components'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError,
} from 'react-live'
import * as Rebass from 'rebass'
import { Box } from 'rebass'

const scope = {
  ...Rebass,
  photo: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
}

const Preview = styled(LivePreview)({
  padding: '1em',
})

const Editor = styled(LiveEditor)({
  fontFamily: '"Roboto Mono", Menlo, monospace',
  fontSize: '14px',
  padding: '1em',
  margin: 0,
  outline: 'none',
  overflowX: 'auto',
  color: '#c0c',
  backgroundColor: '#f6f6ff',
})

const Err = styled(LiveError)({
  fontFamily: 'Menlo, monospace',
  fontSize: '14px',
  padding: '1em',
  overflowX: 'auto',
  color: 'white',
  backgroundColor: 'red',
})

export default ({
  ...props
}) =>
  <Box my={4}>
    <LiveProvider
      {...props}
      style={{
        border: '1px solid #f3f3f9',
        borderRadius: 2,
      }}
      mountStylesheet={false}
      scope={scope}>
      <Preview />
      <Editor />
      <Err />
    </LiveProvider>
  </Box>
