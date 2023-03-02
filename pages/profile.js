import React from 'react'
import {UserProfile} from '@clerk/nextjs'

const profile = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold content-center text-center p-9"> Welcome to your profile</h1>

        <UserProfile />
        
        
     </div>
  )
}

export default profile