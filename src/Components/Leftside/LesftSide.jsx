import React, { useEffect, useState } from 'react'
import './left-side.css'
import { useMenu } from '../../Hooks/menuContext/MenuProvider';

export default function LesftSide() {
  const [isMenuOpen, toggleMenu] = useMenu()
  const [isOpen, setIsOpen] = useState(true);

  useEffect(()=>{
    setIsOpen(isMenuOpen)
  }, [isMenuOpen])

  return (
    <div>
   {isOpen && <aside onClick={toggleMenu} className='left-column'>LesftSide</aside>}
   </div>
  )
}
