import inlineCode from './inline-code'
import Link from './link'
import table from './table'
import heading from './heading'
import code from './code'

const components = {
  h1: heading({ as: 'h1', fontSize: 6, mt: 4, mb: 2 }),
  h2: heading({ as: 'h2', fontSize: 5, mt: 4, mb: 2 }),
  h3: heading({ as: 'h3', fontSize: 4, mt: 4, mb: 2 }),
  h4: heading({ as: 'h4', fontSize: 3, mt: 4, mb: 2 }),
  h5: heading({ as: 'h5', fontSize: 2, mt: 4, mb: 2 }),
  h6: heading({ as: 'h6', fontSize: 1, mt: 4, mb: 2 }),
  a: Link,
  pre: props => props.children,
  inlineCode,
  code,
  table,
}

export default components
