import React from 'react'
import { Box, Flex, Text } from '@rebass/emotion'
import Logo from '../Logo'

export default () =>
  <Box color='white' bg='black'>
    <Flex
      alignItems='center'
      justifyContent='center'
      css={{
        minHeight: '100vh'
      }}>
        <Flex
          flexDirection='column'>
        <Logo size={128} initial={false} />
        <Text
          fontSize={6}
          fontWeight='bold'
          >
          404
        </Text>
        <Text
          fontSize={2}
          fontWeight='bold'>
          Page not found
        </Text>
      </Flex>
    </Flex>
  </Box>
