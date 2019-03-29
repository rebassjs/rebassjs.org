import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
  LiveProvider,
  LiveError,
  LiveEditor,
  LivePreview
} from 'react-live'
import { Flex, Box } from '@rebass/grid/emotion'
import {
  Head,
  Color,
  Bar,
  Button,
  BaseButton,
  ArrowButton,
  Heading,
  Text,
  colors
} from './components'
import { examples } from './examples'

const scope = {
  Flex,
  Box,
  Link,
  Color,
  Bar,
  Button,
  Heading,
  Text,
  colors
}

const dec = state => ({ index: state.index - 1 })
const inc = state => ({ index: state.index + 1 })
// const toggle = key => state => ({ [key]: !state[key] })

const Toolbar = ({
  setState,
  index,
  ...props
}) =>
  <Flex
    flexWrap='wrap'
    alignItems='center'
    color={colors.magenta}
    bg='black'>
    <BaseButton
      as={Link}
      to='/grid'
      children='Rebass Grid'
    />
    <BaseButton
      as='a'
      href='https://github.com/rebassjs/grid'
      children='GitHub'
    />
    <Box mx='auto' />
    <ArrowButton
      left
      title='Previous'
      onClick={e => setState(dec)}
    />
    <ArrowButton
      onClick={e => setState(inc)}
      title='Next'
    />
  </Flex>

const sx = {
  top: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
  },
  preview: {
    width: '100%'
  },
  bottom: {
    minHeight: '40vh',
    fontFamily: 'SF Mono, Menlo, monospace',
    fontSize: 12,
    margin: 0,
    padding: 16,
    overflow: 'auto',
    color: colors.cyan,
    backgroundColor: '#000',
    outline: 'none',
    WebkitFontSmoothing: 'antialiased'
  },
  error: {
    fontFamily: 'SF Mono, Menlo, monospace',
    fontSize: 12,
    position: 'fixed',
    zIndex: 1,
    top: 0,
    right: 0,
    left: 0,
    padding: 16,
    color: '#fff',
    backgroundColor: '#f00'
  },
}

export default props => {
  const [state, setState] = useState({
    index: 0,
  })
  const code = examples[Math.abs(state.index) % examples.length] || '<pre>Missing Example</pre>'

  return (
    <>
      <Head />
      <Toolbar
        {...state}
        setState={setState}
      />
      <LiveProvider
        code={code}
        scope={scope}
        mountStylesheet={false}>
          <div style={sx.top}>
            <LivePreview style={sx.preview} />
          </div>
        <LiveError style={sx.error} />
        <LiveEditor style={sx.bottom} />
      </LiveProvider>
    </>
  )
}
