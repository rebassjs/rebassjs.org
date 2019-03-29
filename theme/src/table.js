import styled from 'styled-components'

export default styled.table(
  props => ({
    borderColor: props.theme.colors.lightgray,
  }),
  {
  width: '100%',
  marginTop: '32px',
  marginBottom: '32px',
  borderCollapse: 'separate',
  borderSpacing: 0,
  '& th': {
    textAlign: 'left',
    verticalAlign: 'bottom',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingRight: '4px',
    paddingLeft: 0,
    borderColor: 'inherit',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid'
  },
  '& td': {
    textAlign: 'left',
    verticalAlign: 'top',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingRight: '4px',
    paddingLeft: 0,
    borderColor: 'inherit',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid'
  },
})
