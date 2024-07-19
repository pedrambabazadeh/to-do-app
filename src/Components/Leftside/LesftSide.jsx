import React, { useState } from 'react'
import './left-side.css'

export default function LesftSide() {

  const [isOpen, setIsOpen] = useState(true);

 const setClose =()=>{  setIsOpen((prevIsOpen) => !prevIsOpen);}

  return (
    <div>
   {isOpen && <aside onClick={setClose} className='left-column'>LesftSide</aside>}
   </div>
  )
}
