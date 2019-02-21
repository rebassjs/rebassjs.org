const path = require('path')

module.exports = {
  __experimentalThemes: [
    {
      resolve: '@rebass/gatsby-theme-docs',
      options: {
        navigation: [
          { text: 'Rebass', href: '/' },
          { text: 'Getting Started', href: '/getting-started' },
          { text: 'Props', href: '/props' },
          { text: 'Extending', href: '/extending' },
          { text: 'Theming', href: '/theming' },
          { text: 'Box', href: '/Box' },
          { text: 'Flex', href: '/Flex' },
          { text: 'Text', href: '/Text' },
          { text: 'Heading', href: '/Heading' },
          { text: 'Button', href: '/Button' },
          { text: 'Link', href: '/Link' },
          { text: 'Image', href: '/Image' },
          { text: 'Card', href: '/Card' },
          { text: 'Advanced', href: '/advanced' },
          { text: 'Recipes', href: '/recipes' },
        ],
      },
    },
  ],
  siteMetadata: {
    title: 'Rebass',
    description: 'React primitive UI components built with styled-system',
    author: '@jxnblk',
    photo: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
    docs: '/getting-started',
    install: 'npm i rebass',
    github: 'https://github.com/rebassjs/rebass',
    features: [
      '8 foundational UI components',
      'Super small (~1KB)',
      'Responsive, themeable style props',
      'Flexbox grid with the Box and Flex components',
      'Support for styled-components & emotion',
      'Extensible base components',
      'Design-system based consistency',
      'Built for responsive web design',
    ],
    quotes: [
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
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-4603832-13'
      }
    },

  ],
}
