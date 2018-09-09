
# Flex

Responsive flexbox layout component. Extends: [Box](/Box).

```.jsx
<Flex>
  <Box
    p={3}
    width={1/2}
    color='magenta'
    bg='black'>
    Flex
  </Box>
  <Box
    p={3}
    width={1/2}
    color='white'
    bg='magenta'>
    Box
  </Box>
</Flex>
```

## Props

In addition to the base [Box](/Box) props.

- `flexWrap`
- `flexDirection`
- `alignItems`
- `justifyContent`
