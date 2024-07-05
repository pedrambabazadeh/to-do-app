import React from 'react'

export default function HeaderBody({children}) {
  return (
    <div style={{backgroundColor: "green", gridArea: "head"}}>{children}</div>
  )
}