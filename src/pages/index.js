import React from 'react'
import { graphql, Link as GLink } from 'gatsby'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Link,
} from 'rebass'
import pkg from 'rebass/package.json'
import Logo from '../Logo'
import LiveCode from '../LiveCode'
import NavLink from '../NavLink'
import {
  Container,
  Pre,
} from '../components'

const demo = `<Flex
  px={4}
  py={4}
  alignItems='center'>
  <Heading
    fontSize={[ 4, 5 ]}
    color='blue'>
    Live Demo
  </Heading>
  <Box mx='auto' />
  <Button>
    Beep
  </Button>
  <Button ml={2}>
    Boop
  </Button>
</Flex>`

export const name = 'Rebass'

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
    <Flex
      px={3}
      py={[ 4, 5 ]}
      color='white'
      bg='black'
      alignItems='center'
      css={{
        minHeight: '90vh',
        WebkitFontSmoothing: 'antialiased'
      }}>
      <Container width={1}>
        <Logo
          text
          size={[ 256, null, 320, 384 ]}
        />
        <Text
          my={3}
          fontSize={3}
          fontWeight='bold'>
          {props.data.site.siteMetadata.description}
        </Text>
        <Flex
          my={3}
          flexWrap='wrap'
          alignItems='center'>
          <Button
            as={'a'}
            href='/getting-started'
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
          <Pre color='magenta' mx={3} my={3}>{props.data.site.siteMetadata.install}</Pre>
        </Flex>
        <Pre>v{pkg.version}</Pre>
      </Container>
    </Flex>
    <Container>
      <Flex flexWrap='wrap' mx={-3} py={5}>
        {props.data.site.siteMetadata.features.map(feat => (
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
        {props.data.site.siteMetadata.quotes.map(({ text, name, href }) => (
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
      <Flex
        alignItems='center'
        py={6}>
        <Heading fontSize={5}>Get Started</Heading>
        <Box mx='auto' />
        <Button
          as={'a'}
          href='/getting-started'
          py={3}
          variant='primary'>
          Read the Docs
        </Button>
      </Flex>
    </Container>
    <Box as='footer' py={5} bg='lightgray'>
      <Container>
        <Flex mx={-3} flexWrap='wrap'>
          <Box width={[ 1/2, null, 1/4 ]}>
            <NavLink href='/getting-started'>Docs</NavLink>
            <NavLink href={props.data.site.siteMetadata.github}>GitHub</NavLink>
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

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        description
        install
        features
        quotes {
          text
          name
          href
        }
      }
    }
  }
`
