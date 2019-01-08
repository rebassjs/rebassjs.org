import React from 'react'
import { width } from 'styled-system'
import { Helmet as Head } from 'react-helmet'
import * as Rebass from 'rebass'
import { Box, Text } from 'rebass'

export const photo = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
export const docs = '/getting-started'
export const install = 'npm i rebass'
export const github = 'https://github.com/rebassjs/rebass'

export const scope = {
  ...Rebass,
  photo
}

export const Container = props =>
  <Box
    {...props}
    px={4}
    mx='auto'
    css={{
      maxWidth: '1024px'
    }}
  />

export const Pre = props =>
  <Text
    {...props}
    css={{
      fontFamily: 'Menlo, monospace'
    }}
  />

export const features = [
  '8 foundational UI components',
  'Super small (~1KB)',
  'Responsive, themeable style props',
  'Flexbox grid with the Box and Flex components',
  'Support for styled-components & emotion',
  'Extensible base components',
  'Design-system based consistency',
  'Built for responsive web design',
]

export const quotes = [
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

export const demo = `<Flex
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
