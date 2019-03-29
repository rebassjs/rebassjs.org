import styled from '@emotion/styled'
import { Box } from '@rebass/emotion'

export const Pre = styled(Box)({
  fontFamily: '"Roboto Mono", Menlo, monospace',
  fontSize: '14px',
  outline: 'none',
  overflowX: 'auto',
  borderRadius: '2px',
})

Pre.defaultProps = {
  as: 'pre',
  p: '1em',
  my: 4,
  color: '#c0c',
  bg: '#f6f6ff',
}

export default Pre
