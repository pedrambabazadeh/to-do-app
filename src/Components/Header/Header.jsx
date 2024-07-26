import React from 'react'
import HeaderBody from './HeaderBody'
import {Email, CalendarMonth, Today, CheckBox, Note, Alarm, Menu} from '@mui/icons-material'
import { useMenu } from '../../Hooks/menuContext/MenuProvider'

export default function Header() {
 const [, toggleLeftMenu] = useMenu();
  return (
    <HeaderBody>
      <ul className='header-ul'>
      <li onClick = {()=>toggleLeftMenu()}>
          <Menu/>
        </li>
        <li>
          <Today/>
        </li>
        <li>
          <CalendarMonth/>
        </li>
        <li>
          <Email/>
        </li>
        <li>
          <CheckBox/>
        </li>
        <li>
          <Note/>
        </li>
        <li>
          <Alarm/>
        </li>
      </ul>
    </HeaderBody>
  )
}
