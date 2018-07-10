import React from 'react'

require('./CenteredContainer.css')

export default function CenteredContainer ({ children }) {
  return (
    <div className='container'>
      { children }
    </div>
  )
}
