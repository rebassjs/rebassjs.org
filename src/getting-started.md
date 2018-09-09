
export const name = 'Getting Started'

# Getting Started

```sh
npm i rebass@next
```

Import components directly from Rebass and use them to build out your UI.

```js
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'
```

```.jsx
<Box width={256}>
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={photo} />
    <Box px={2}>
      <Heading as='h3'>
        Card
      </Heading>
      <Text fontSize={0}>
        Small meta text
      </Text>
    </Box>
  </Card>
</Box>
```

### Props

Rebass components use [styled-system][] for responsive, theme-based style props.

Read more about [Rebass props](/props).

### Extending

Rebass components are also a great starting point for extending into custom UI components

```jsx
import styled from 'styled-components'
import { Button as Base } from 'rebass'

export const Button = styled(Base)`
  border-radius: 9999px;
  &:hover {
    background-color: ${props => props.theme.colors.navy};
  }
`
```

Read more about [Extending Rebass components](/extending).

### Theming

Use a ThemeProvider component to completely customize the look and feel of Rebass components,
from fonts, font sizes, and colors to button variants and card styles.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'

const blue = '#07c'
const lightgray = '#f6f6ff'

const theme = {
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64
  ],
  colors: {
    blue,
    lightgray,
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: blue,
    },
    outline: {
      color: blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 2px'
    },
  },
}

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
```

Read more about [Theming Rebass components](/theming).

[styled-system]: https://github.com/jxnblk/styled-system
