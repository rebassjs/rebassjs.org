# Carousel

```.jsx
<Carousel
  index={false ? 1 : 0}>
  <Box bg='blue'>
    <Flex
      p={6}
      justify='center'
      align='center'>
      <Heading>Hello</Heading>
    </Flex>
  </Box>
  <Box bg='gray'>
    <Flex
      p={6}
      justify='center'
      align='center'>
      <Heading>Rebass</Heading>
    </Flex>
  </Box>
</Carousel>
```

Extends: [Flex](/components/Flex) > [Box](/components/Box)

prop | default | theme key | style type
---|---|---|---
width | 1 | N/A | responsive