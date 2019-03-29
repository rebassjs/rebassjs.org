import React from 'react'
import LiveCode from './live-code'
import Pre from './pre'

export default ({
  className,
  ...props
}) => /\.jsx/.test(className) ? (
  <LiveCode
    {...props}
    code={props.children}
  />
) : (
  <Pre className={className} {...props} />
)
