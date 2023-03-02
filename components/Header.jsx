import React from 'react'
import {UserButton} from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='flex justify-between px-4 pt-4'>
        <h2>Dashboard</h2>
        <UserButton />
    </div>
  )
}

export default Header