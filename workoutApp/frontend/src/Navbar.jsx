import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useLogout from './useLogout';
import useAuthContext from './customhook/useAuthContext';
// import Logo1 from './assets/Logo1.png';
// faBars
const links = [
  { name: 'Home', path: '/' },
  { name: 'Workout', path: '/workouts' },
  { name: 'Profile', path: '/profile' },
  // { name: 'Login', path: '/login' },
  // { name: 'SignIn', path: '/signUp' },
];

const Navbar = () => {
  const[open,close]=useState(false);
  const {user}=useAuthContext()
  const {logout}=useLogout()
const toggle=()=>{
close(!open);

}
const navigate=useNavigate('/')
return (
           <motion.div id='nav' className='text-white   fixed top-0 w-full  '>
            <div id='nav-cont' className=" relative   w-full h-auto flex flex-col  md:flex-row sm:flex-col lg:flex-row p-5 justify-around">
      <figure onClick={()=>navigate('/')} className='flex cursor-pointer flex-col items-center text-[6px]  justify-center'>
        <img className='h-[20px] w-[20px] sm:h-[20px] sm:w-[20px] md:h-[30px]  md:w-[30px] rounded-full  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllLLRubuRm9FtvKnHLOWbaOsRaG_5uk0YIg&s" alt="" />
        <p onClick={()=>navigate('/')
        } className={'no-wrap'}>{'< MuscleFlex/>'}</p>
      </figure>
      <motion.div id='navlinks' className={` ${open?'active':''}`}>
        {links.map((link, index) => (
          <Link key={index} to={link.path} className='p-2'>
            {link.name}
          </Link>
        ))}
       {!user && (<div className="flex w-inherit  md:justify-center items-center flex-col md:flex-row sm:flex-col lg:flex-row" >
        <Link className='p-2' to={'/login'}>Login</Link>
        <Link className='p-2' to={'/signUp'}>Signin</Link>
        </div>)}
        <div className='flex gap-2 p-2  flex-col md:flex-col lg:flex-row sm:flex-col justify-center text-center items-center'>
        <button onClick={()=>logout()} className='text-white m-5 text-center border border-solid border-orange-600 p-2 text-orange-600 rounded-md '>Logout</button>
    {user && <p className="text-white text-center">{user.email}</p>}</div>
      </motion.div>
      <div>
      </div>
      <button onClick={toggle} id='btn'><FontAwesomeIcon icon={faBars} /></button>
      </div>
      
    </motion.div>
  );
}

export default Navbar;
