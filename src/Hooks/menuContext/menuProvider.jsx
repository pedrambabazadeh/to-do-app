import React, { createContext, useContext, useState } from 'react'

const MenuContext = createContext(undefined);
 const MenuProvider =({children}) =>{

  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(prev => prev != prev)
  return (
    <MenuContext.Provider value={[isOpen, toggleOpen]}>{children}</MenuContext.Provider>
  )
}

const useMenu = ()=>{ let context = useContext(MenuContext); return context}
export {MenuProvider, useMenu}