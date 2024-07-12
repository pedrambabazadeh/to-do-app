import React from 'react'
import HeaderBody from './HeaderBody'
import {Email, CalendarMonth, Today, CheckBox, Note, Alarm} from '@mui/icons-material'

export default function Header() {
  return (
    <HeaderBody>
      <ul className='header-ul'>
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
