import React from 'react'
import { Helmet } from 'react-helmet'

export default props =>
  <>
    <Helmet>
      <title>Rebass</title>
      <meta name='description' content='React UI component library & design system, built with styled-components and styled-system' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@jxnblk' />
      <meta name='twitter:title' content='Rebass' />
      <meta name='twitter:description' content='React UI component library & design system, built with styled-components and styled-system' />
      <meta name='twitter:image' content='https://rebassjs.org/card.png' />
      <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto+Mono' />
    </Helmet>
    {props.children}
  </>
