// debugging
import React from 'react'
import { render } from 'react-dom'
import * as Rebass from 'rebass'
import Home from './index'
import {
  StyleProvider,
  Layout,
} from 'mdx-go/styled-components'

render(
  <StyleProvider
    components={Rebass}
  >
    <Layout>
      <Layout.Main>
        <Home />
      </Layout.Main>
    </Layout>
  </StyleProvider>
  ,
  root
)

console.log('hi')

if (module.hot) module.hot.accept()
