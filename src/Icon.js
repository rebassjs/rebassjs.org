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
    }}>
    <Logo static />
  </div>
)
