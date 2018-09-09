import React from 'react'
import styled from 'styled-components'
import {
  // Link as GoLink,
  LiveCode
} from 'mdx-go'
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
  install,
  Container,
} from './components'
import pkg from 'rebass/package.json'

export const name = 'Rebass'
export { Root } from './components'

const GoLink = Link

const PrimaryButton = styled(Button)({
  transition: 'background-color .2s ease-out',
  '&:hover': {
    backgroundColor: 'magenta'
  }
})

const SecondaryButton = styled(Button)({
  transition: '.2s ease-out',
  transitionProperty: 'color, box-shadow',
  backgroundColor: 'transparent',
  boxShadow: 'inset 0 0 0 2px',
  '&:hover': {
    color: 'magenta',
    backgroundColor: 'transparent',
    boxShadow: 'inset 0 0 0 2px magenta'
  }
})

const Title = styled(Heading)([])

const Hero = props => (
  <Box
    py={[ 4, 5 ]}
    style={{
      WebkitFontSmoothing: 'antialiased'
    }}
    color='white'
    bg='black'>
    <Flex
      flexWrap={[ 'wrap', 'wrap', 'nowrap' ]}
      width={1}
      mx={-3}
      mb={3}
      alignItems='flex-start'>
      <Flex
        justifyContent='center'
        width={[ 1, null, 256, 320, 512 ]}
        px={0}>
        <Logo size={[ 256, null, null, 320 ]} />
      </Flex>
      <Box width={[ 1, null, 384 ]} px={3}>
        <Title
          as='h1'
          fontSize={[ 6, 7, 8 ]}>
          Rebass
        </Title>
        <pre mb={2} color=''>v{pkg.version}</pre>
        <Text mb={3} fontWeight='bold' color=''>
          {pkg.description}
        </Text>
        <Flex
          mx={-3}
          mb={4}
          width={1}
          flexWrap='wrap'
          alignItems='center'>
          <PrimaryButton
            as={GoLink}
            href={docs}
            fontSize={2}
            color='black'
            bg='cyan'
            children='Documentation'
            py={3}
            mx={3}
            my={3}
          />
          <SecondaryButton
            as='a'
            href='https://github.com/rebassjs/rebass'
            fontSize={2}
            color='white'
            children='GitHub'
            py={3}
            mx={3}
            my={3}
          />
          <pre color='magenta' mx={3} my={3}>{install}</pre>
        </Flex>
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
      </Box>
    </Flex>
  </Box>
)

const Features = props =>
  <Flex flexWrap='wrap' mx={-3} mb={5}>
    {quotes.map(({ text, name, href }) => (
      <Box key={name} width={[ 1, null, 1/2 ]} px={3} py={4}>
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

const quotes = [
  {
    text: '“One of the best React component libs out there”',
    name: 'Max Stoiber',
    href: 'https://twitter.com/mxstbr/status/882657561111080960'
  },
  {
    text: '“Rebass is the Bootstrap of React.”',
    name: 'Jori Lallo',
    href: 'https://twitter.com/jorilallo/status/882990343225868289'
  },
  {
    text: '“A whopper component library built on styled-components. Responsive, systematic, scalable...the business!”',
    name: 'Colm Tuite',
    href: 'https://twitter.com/colmtuite/status/882715087936606210'
  },
  {
    text: '“Why the hell are we now putting CSS in Javascript? I’m losing my mind with web developers trying to control everything in the world with client-side javascript. What a mess.”',
    name: 'alttab',
    href: 'https://news.ycombinator.com/item?id=14705579'
  }
]

const code = `<Box px={4} py={5} color='white' bg='magenta'>
  <Heading
    as='h1'
    fontSize={[ 4, 5, 6 ]}>
    Hello, Rebass
  </Heading>
</Box>
<Flex
  px={4}
  py={5}
  alignItems='center'>
  <Heading color='blue'>
    Beep
  </Heading>
  <Box mx='auto' />
  <Button border='none'>
    Beep
  </Button>
  <Button ml={2}>
    Boop
  </Button>
</Flex>
`

const Demo = props =>
  <Box id='demo' py={5}>
    <Heading mb={3}>Live Demo</Heading>
    <LiveCode code={code} />
  </Box>

const CTA = props =>
  <Box py={5}>
    <Flex flexWrap='wrap' alignItems='center'>
      <Box>
        <Heading mb={2}>
          Getting Started
        </Heading>
        <Text fontWeight='bold' mb={3}>
          Install Rebass now and read the docs to get started
        </Text>
        <pre mb={3}>{install}</pre>
      </Box>
      <Box mx='auto' />
      <Box>
        <Button
          as={GoLink}
          fontSize={2}
          py={3}
          bg='magenta'
          href={docs}>
          Documentation
        </Button>
      </Box>
      <Box mx='auto' />
    </Flex>
  </Box>

export default class extends React.Component {
  static defaultProps = {
    layout: false
  }

  render () {
    return (
      <React.Fragment>
        <Hero />
        <Container>
          <Features />
          <Demo />
          <CTA />
        </Container>
      </React.Fragment>
    )
  }
}
