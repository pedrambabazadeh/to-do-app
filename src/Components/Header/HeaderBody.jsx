import React from 'react'
import './header.css'

export default function HeaderBody({children}) {
  return (
    <header className='header'>{children}</header>
  )
}