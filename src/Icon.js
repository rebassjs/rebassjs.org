import React from 'react'
import Logo from './Logo'

export default props => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      width: 512,
      height: 512,
      borderRadius: 99999
    }}>
    <Logo
      static
      size={512}
      strokeWidth={6}
    />
  </div>
)
