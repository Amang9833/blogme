import React from 'react'
import Sidebar from '../../sideBar/Sidebar'
import SInglePage from '../../singlePage/SInglePage'
import './single.css'

export default function Single() {
  return (
      <div className='single'>
      <Sidebar />
      <SInglePage />
    </div>
  )
}
