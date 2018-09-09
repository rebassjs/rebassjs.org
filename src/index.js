import React from 'react'
import styled from 'styled-components'
import {
  Link as GoLink,
  NavLink,
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
            my={3}>
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
      <Box id='demo' py={4}>
        <LiveCode code={demo} />
      </Box>
      <Box py={5}>
        <Heading mb={3} fontSize={5}>Get Started</Heading>
        <Button
          as={GoLink}
          href={docs}
          py={3}
          variant='primary'>
          Read the Docs
        </Button>
      </Box>
    </Container>
    <Box as='footer' py={5} bg='lightgray'>
      <Container>
        <Flex mx={-3} flexWrap='wrap'>
          <Box width={[ 1/2, null, 1/4 ]}>
            <NavLink href={docs}>Docs</NavLink>
            <NavLink href={github}>GitHub</NavLink>
            <NavLink href='https://rebass-v2.now.sh'>v2 Docs</NavLink>
          </Box>
          <Box width={[ 1/2, null, 1/4 ]}>
            <NavLink href='https://github.com/rebassjs/grid'>Rebass Grid</NavLink>
            <NavLink href='https://github.com/jxnblk/styled-system'>Styled System</NavLink>
            <NavLink href='https://jxnblk.com'>Made by Jxnblk</NavLink>
          </Box>
        </Flex>
      </Container>
    </Box>
  </React.Fragment>
