import React from 'react'
import styled from 'styled-components'
import { width } from 'styled-system'
import { Head, Link } from 'mdx-go'
import {
  LiveProvider,
  LivePreview,
  LiveError,
  LiveEditor,
} from 'react-live'
import * as Rebass from 'rebass'
import {
  Provider,
  Flex,
  Box,
  Border,
  Relative,
  Absolute,
  Container,
  NavLink,
  BlockLink,
  ButtonTransparent,
  Text,
  theme
} from 'rebass'
import { display, color } from 'styled-system'
import MenuIcon from 'rmdi/lib/Menu'
import RebassMDX from '@rebass/mdx'
import Sidepane from 'sidepane'

export const photo = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
export const docs = '/getting-started'
export const install = 'npm i rebass'
export const github = 'https://github.com/jxnblk/rebass'

export const scope = {
  ...Rebass,
  photo
}

export const navigation = [
  { name: 'Rebass', href: '/' },
  { name: 'Getting Started', href: '/getting-started' },
  { name: 'Props', href: '/props' },
  { name: 'Grid System', href: '/grid-system' },
  { name: 'Theming', href: '/theming' },
  { name: 'Server Side Rendering', href: '/server-side-rendering' },
  { name: 'Colors', href: '/colors' },
  { name: 'GitHub', href: github },
  { name: 'Made by Jxnblk', href: 'https://jxnblk.com' },
]

export const NavBar = styled(Flex)({
  height: '48px',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
}, display)
NavBar.defaultProps = {
  bg: 'white',
  display: [ 'flex', 'none' ],
  alignItems: 'center',
}

export const SidepaneRoot = styled(Sidepane)({
  '& .sidepane-bar': {
    backgroundColor: 'white',
  },
  '& .sidepane-overlay': {
    backgroundColor: 'rgba(0, 0, 0, .125)'
  }
})

export const SideNav = props =>
  <Box pt={3} pb={5}>
    {navigation.map(link => (
      <NavLink
        is={Link}
        key={link.href}
        width={1}
        px={4}
        color={props.location.pathname === link.href ? 'blue' : undefined}
        href={link.href}
        children={link.name}
      />
    ))}
  </Box>

export const Pagination = props => {
  const { pathname } = props.location
  const index = navigation.findIndex(link => link.href === pathname)
  const previous = navigation[index - 1]
  const next = navigation[index + 1]
  return (
    <Flex py={4}>
      {previous && (
        <Box>
          <BlockLink
            is={Link}
            href={previous.href}>
            <Text fontSize={0}>Previous</Text>
            <Text fontSize={[3,4]} fontWeight='bold'>
              {previous.name}
            </Text>
          </BlockLink>
        </Box>
      )}
      <Box mx='auto' />
      {next && (
        <Box>
          <BlockLink
            is={Link}
            href={next.href}>
            <Text textAlign='right' fontSize={0}>Next</Text>
            <Text
              fontSize={[3,4]}
              textAlign='right'
              fontWeight='bold'>
              {next.name}
            </Text>
          </BlockLink>
        </Box>
      )}
    </Flex>
  )
}

export const PageLayout = props =>
  <SidepaneRoot
    render={({ togglePane }) => (
      <React.Fragment>
        <NavBar>
          <ButtonTransparent
            title='Menu'
            px={0}
            css={{ width: '48px' }}
            onClick={togglePane}>
            <MenuIcon />
          </ButtonTransparent>
          <Box mx='auto'>
            <Text fontWeight='bold'>
              Rebass
            </Text>
          </Box>
          <Box width={48} />
        </NavBar>
        <Sidepane.Bar>
          <SideNav {...props} />
        </Sidepane.Bar>
        <Sidepane.Main>
          <Container
            px={4}
            py={5}
            maxWidth='786px'>
            {props.children}
            <Pagination {...props} />
          </Container>
        </Sidepane.Main>
      </React.Fragment>
    )}
  />

export class ScrollTop extends React.Component {
  componentDidUpdate (prev) {
    if (prev.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0)
      const { hash } = this.props.location
      if (hash) {
        const el = document.getElementById(hash.slice(1))
        if (!el) return
        el.scrollIntoView()
      }
    }
  }

  render () {
    return false
  }
}

export const Root = props => {
  const Layout = props.location.pathname === '/'
    ? props => props.children
    : PageLayout

  return (
    <Provider>
      <React.Fragment>
        <Head>
          <title>Rebass</title>
          <meta name='description' content='React UI component library & design system, built with styled-components and styled-system' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@jxnblk' />
          <meta name='twitter:title' content='Rebass' />
          <meta name='twitter:description' content='React UI component library & design system, built with styled-components and styled-system' />
          <meta name='twitter:image' content='https://rebassjs.org/card.png' />
          <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto+Mono' />
        </Head>
        <RebassMDX components={scope}>
          <Layout {...props}>
            {props.children}
          </Layout>
        </RebassMDX>
        <ScrollTop {...props} />
        {ga}
      </React.Fragment>
    </Provider>
  )
}

// todo: update domain
const ga = (
  <script
    dangerouslySetInnerHTML={{
      __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-4603832-6', 'auto'); ga('send', 'pageview');`
    }}
  />
)

/* from _app.js
import React from 'react'
import { Provider as RefunkProvider } from 'refunk'
import {
  SidebarLayout,
  ScopeProvider
} from '@compositor/x0/components'
import sortBy from 'lodash.sortby'
import pkg from '../package.json'
import * as Rebass from 'rebass'
import { photo } from './_constants'


const navOrder = [
  'Rebass',
  'getting-started',
  'props',
  'grid-system',
  'theming',
  'extending',
  'server-side-rendering',
  'colors',
  'components',
]

const createNav = routes => [
  ...sortBy([...routes]
    .map(route => {
      if (route.name !== 'index') return route
      return {
        ...route,
        name: 'Rebass'
      }
    }), a => {
      const index = navOrder.indexOf(a.name)
      return index < 0 ? Infinity : index
    }),
  {
    key: 'github',
    name: 'GitHub',
    path: 'https://github.com/jxnblk/rebass',
  },
  {
    key: 'jxnblk',
    name: 'Made by Jxnblk',
    path: 'https://jxnblk.com',
  },
]

export default class extends React.Component {
  render () {
    const {
      routes,
      route,
      children
    } = this.props
    const nav = createNav(routes)

    const disableLayout = route && route.props && route.props.layout === false

    return (
      <ScopeProvider scope={scope}>
        <RefunkProvider pkg={pkg}>
          <Rebass.Provider>
            {disableLayout ? (
              children
            ) : (
              <SidebarLayout
                {...this.props}
                title='Rebass'
                routes={nav}
              />
            )}
          </Rebass.Provider>
        </RefunkProvider>
      </ScopeProvider>
    )
  }
}
*/



const _scope = { ...Rebass, photo }

const Editor = styled(LiveEditor)`
  font-family: 'SF Mono', 'Roboto Mono', Menlo, monospace;
  font-size: 13px;
  tab-size: 2;
  margin: 0;
  padding: 16px;
  color: ${theme.colors.blue};
  outline: none;
  overflow: auto;
  max-height: 512px;
  ${width}
`

const Err = styled(LiveError)`
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 13px;
  padding: 16px;
  color: white;
  background-color: red;
`

const toggle = key => state => ({
  [key]: !state[key]
})

const transform = src => `<React.Fragment>${src}</React.Fragment>`

export const Live = props => {
  const {
    code,
    noInline
  } = props
  const scope = { ...{ toggle }, ..._scope, ...props }

  return (
    <LiveProvider
      code={code}
      noInline={noInline}
      scope={scope}
      transformCode={transform}
      mountStylesheet={false}>
      <Flex flexWrap='wrap'>
        <Border width={[ 1, null, 3/5 ]}>
          <Relative>
            <Box
              p={3}
              style={{ minHeight: 128 }}>
              <LivePreview />
            </Box>
            <Absolute top={0} left={0} right={0}>
              <Err />
            </Absolute>
          </Relative>
        </Border>
        <Editor
          width={[ 1, null, 2/5 ]}
        />
      </Flex>
    </LiveProvider>
  )
}

Live.defaultProps = {
  ignore: true
}
