import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { openMenu } from '../utils/menuSlice'

const Body = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(store => store?.menuSlice?.isMenuOpen)
  useEffect(()=>{
    dispatch(openMenu());
  },[dispatch])

  return (
    <div className='flex'>
      {isMenuOpen && <Sidebar />}
      <Outlet className="mx-auto" />
    </div>
  )
}

export default Body