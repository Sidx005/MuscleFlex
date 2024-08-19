import { motion } from 'framer-motion';
import React, { useState } from 'react';
import useLogin from './useLogin';

const LoginForm = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const {login,Error,loading}=useLogin()
    const submit=async(e)=>{
        e.preventDefault();
        console.log(email,password);

    await    login(email,password);
    setEmail('');
    setPassword('')

    }
  return (
    <div className='h-screen bg-black overflow-hidden relative w-full'>

      
      <div className="h-full flex relative z-30 backdrop backdrop-blur-md bg-[rgba(0,0,0,0.1)] flex-col justify-center items-center p-8">
        <form onSubmit={submit} id='login' className='bg-white p-6 rounded-md shadow-md w-[300px] flex flex-col items-center'>
          <h1 className='text-2xl font-bold mb-4'>Login Form</h1>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} 
            type="text" 
            placeholder="Username" 
            className='mb-4 p-2 border border-gray-300 rounded w-full'
          />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} 
            type="password" 
            placeholder="Password" 
            className='mb-4 p-2 border border-gray-300 rounded w-full'
          />
          <button 
            type="submit" 
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
