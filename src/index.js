import React from 'react'
import styled from 'styled-components'
import {
  Link as GoLink,
  LiveCode
} from 'mdx-go/styled-components'
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Link,
} from 'rebass'
import Logo from './Logo'
import {
  docs,
  github,
  install,
  Container,
  Pre,
  features,
  quotes,
  demo,
} from './components'
import pkg from 'rebass/package.json'
import GettingStarted from './getting-started.md'

export const name = 'Rebass'
export { Root } from './components'

const badges = (
  <Flex
    mt={3}
    alignItems='center'
    width={1}>
    <Link
      mr={2}
      py={2}
      href='https://travis-ci.org/rebassjs/rebass'>
      <Image
        src='https://img.shields.io/travis/rebassjs/rebass/master.svg'
      />
    </Link>
    <Link
      ml={2}
      mr={3}
      py={2}
      href='https://github.com/rebassjs/rebass'>
      <Image
        src='https://img.shields.io/github/stars/rebassjs/rebass.svg?style=social&label=Star'
      />
    </Link>
  </Flex>
)

const alt = (
    <Flex
      flexDirection='column'
      alignItems='center'
      px={3}
      py={[ 4, 5 ]}
      color='white'
      bg='black'
      css={{
        WebkitFontSmoothing: 'antialiased'
      }}>
      <Logo
        text
        size={[ 256, null, null, 320 ]}
      />
      <Text
        mt={3}
        mb={3}
        fontSize={3}
        textAlign='center'
        fontWeight='bold'>
        React primitive UI components built with styled-system
        {false && pkg.description}
      </Text>
      <Flex
        mb={4}
        width={1}
        flexWrap='wrap'
        alignItems='center'>
        <Box mx='auto' />
        <Button
          as={GoLink}
          href={docs}
          variant='primary'
          children='Docs'
        />
        <Box mx={2} />
        <Button
          as='a'
          href='https://github.com/rebassjs/rebass'
          color='black'
          children='GitHub'
          variant='outline'
        />
        <Pre color='magenta' mx={3} my={3}>{install}</Pre>
        <Box mx='auto' />
      </Flex>
      <Pre mb={2} fontSize={1}>v{pkg.version}</Pre>
    </Flex>
)

export default props =>
  <React.Fragment>
    <Box
      px={3}
      py={[ 4, 5 ]}
      color='white'
      bg='black'
      css={{
        WebkitFontSmoothing: 'antialiased'
      }}>
      <Container>
        <Logo
          text
          size={[ 256, null, 320, 384 ]}
        />
        <Text
          my={3}
          fontSize={3}
          fontWeight='bold'>
          React primitive UI components built with styled-system
        </Text>
        <Flex
          my={3}
          flexWrap='wrap'
          alignItems='center'>
          <Button
            as={GoLink}
            href={docs}
            variant='primary'
            children='Docs'
          />
          <Box mx={2} />
          <Button
            as='a'
            href='https://github.com/rebassjs/rebass'
            color='black'
            children='GitHub'
            variant='outline'
          />
          <Pre color='magenta' mx={3} my={3}>{install}</Pre>
        </Flex>
        <Pre>v{pkg.version}</Pre>
      </Container>
    </Box>
    <Container>
      <Flex flexWrap='wrap' mx={-3} py={5}>
        {features.map(feat => (
          <Box
            key={feat}
            width={[ 1, null, 1/2 ]}
            px={3}
            my={2}
            fontSize={3}
            css={{
              fontWeight: 'bold'
            }}>
            {feat}
          </Box>
        ))}
      </Flex>
      <Flex flexWrap='wrap' mx={-3} py={5}>
        {quotes.map(({ text, name, href }) => (
          <Box
            key={name}
            width={[ 1, null, 1/2 ]}
            px={3}
            my={4}>
            <Text
              mb={2}
              fontSize={3}
              fontWeight='bold'>
              {text}
            </Text>
            <Link fontSize={1} href={href}>{name}</Link>
          </Box>
        ))}
      </Flex>
      {false && (
      <Box id='demo' py={5}>
        <LiveCode code={demo} />
      </Box>
      )}
      <Box py={5}>
        <GettingStarted />
      </Box>
    </Container>
    <Box py={5} bg='lightgray'>
      <Container>
        <Flex>
          <Link href={github}>GitHub</Link>
          <Link href='https://jxnblk.com'>Made by Jxnblk</Link>
          <Link href='https://github.com/rebassjs/grid'>Rebass Grid</Link>
          <Link href='https://github.com/jxnblk/styled-system'>Styled System</Link>
        </Flex>
      </Container>
    </Box>
  </React.Fragment>
