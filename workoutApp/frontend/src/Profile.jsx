import React from 'react'
import useAuthContext from './customhook/useAuthContext'

const Profile = () => {
    const {user}=useAuthContext()
  
  return (
    <div className='p-[10%] w-full flex justify-center items-center '>
        <div className="card h-[20vh] min-w-[20vw] rounded-md shadow-[inset_0_0_14px_0_rgba(0,0,0,0.7)]

 text-black font-bold p-5 bg-white ">
        <p>{user.email}</p>
        {/* <p>{user.workouts}</p> */}
        </div>
    </div>
  )
}

export default Profile