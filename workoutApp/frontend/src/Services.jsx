import { motion } from 'framer-motion'
import React from 'react'
// motion
const Services = () => {
    const variants={
        hidden:{opacity:0,scale:0.8},
        visible:{opacity:1,scale:2.1},
       
      }
      const imgcards=[
        {
            id:1,
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SQ2yWbGDGa8ec0gyks1p7BT7icAh1AME-g&s'
        },{
            id:2,
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxZqc1kbzVkcCxeAGzLQTn8kuOmdO9PEgBA&s'
        },{
            id:3,
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0jAA0ZNkzz4RG-W4XwvlsD5ahfJ0m-p2vg&s'
        },
      ]
  return (
    <motion.div className='w-full mt-[150px] flex   items-center flex-col text-center justify-center'>
        
<motion.h1 variants={variants} initial="hidden" whileInView={'visible'} transition={{duration:1}}  className='font-bold text-white'> Our Services</motion.h1>
<motion.div className='flex md:flex-row flex-col sm:flex-col gap-5 p-5'>
    {imgcards.map((img,index)=>(
        <motion.div className={`service-cards mt-20 rounded hover:filter hover:grayscale transition-all rounded-md `}             style={{ backgroundPosition:'center',backgroundSize:'cover',backgroundImage: `url(${img.src})`, width: '200px', height: '200px' }}
>
        </motion.div>
    ))}
</motion.div>
    </motion.div>
  )
}

export default Services