import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from './Footer'
// import Logo from './assets/Logo1.png'
const Hero = () => {
  return (
 <motion.div className='w-full   overflow-hidden flex p-5 justify-center flex-col  items-center min-h-[30vh]'>
    <div className="p-5 w-full min-h-[20vh]"></div>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:.5,damping:20}} className='w-1/2 text-left lg:text-left  sm:text-center items-center  grid grid-cols-1 md:grid-cols-2 '>
     <div className="hero-data w-auto sm:w-full md:w-auto text-center md:text-left relative items-center sm:items-center md:items-start justify-center sm:text-center   flex flex-col gap-5">
     <motion.div drag dragConstraints={{top:0,left:0,right:0,bottom:0}} className='w-20 absolute left-[-70px] top-[-60px] h-20 rounded-full p-5 dragCircle'></motion.div>

        <h1 className='text-white text-[30px] md:text-5xl lg:text-5xl sm:text-[20px] font-bold '>Workout App</h1>
      <Link to={'/workouts'}> <button className='bg-red-500 text-white hover:shadow-md hover:shadow-red-800 hover:bg-red-400 font-bold p-2 rounded max-w-[7.5rem] text-md'>See Workouts</button></Link> 
     </div>
     <picture className='text-center '>
        <img id='dumbell' className='h-80 w-auto md:h-30 sm:h-30' src="https://purepng.com/public/uploads/medium/dumbbells-jvn.png" alt="" />
     </picture>

   </motion.div>
</motion.div>

)
}

export default Hero