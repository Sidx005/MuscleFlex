import { motion, px } from 'framer-motion'
import React from 'react'
const obj=[
    {
        id:1,
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54DApkMQx3gUR_7jAqrHaPuAmEgfCZly97A&s'
    },{
        id:2,
        src:'https://img.freepik.com/premium-vector/cute-funny-running-egg_464314-1364.jpg'
    },{
        id:3,
        src:'https://thumbs.dreamstime.com/b/boiled-egg-mascot-cartoon-barbell-cute-style-design-t-shirt-sticker-logo-element-boiled-egg-mascot-cartoon-196179007.jpg'
    },
]
const Cards = () => {
  return (
    <motion.div initial={{x:-1300,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.5 , damping:40}} className='flex justify-center items-center  gap-5 flex flex-col  my-[10%]'>
                <motion.h1 className='text-white text-[40px] font-bold'>Goodies</motion.h1>

       <motion.div className='flex flex-col gap-5 lg:flex-row md:flex-row sm:flex-col'>
        {
            obj.map(img=>(
                <img key={img.id} height={'300px'} className='rounded-md mt-[50px]' width={'300px'} src={img.src}/>
            ))
        }
    </motion.div>
    </motion.div>
  )
}

export default Cards