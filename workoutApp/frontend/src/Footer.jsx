import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
// FontAwesomeIco
import {faSquareXTwitter,faSquareGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const list=[
 
  {
    id:1,content:'Add Exercises'
  },
  {
    id:2,content:'Stopwatch'
  },
  {
    id:3,content:'blogs'
  },
  {
    id:4,content:'Training'
  }
]
const Footer = () => {
  return (
    <div className="flex   flex-col w-full justify-center gap-10  items-center bg-white p-20" >
    <div className=' w-full  flex  text-center md:justify-evenly  items-center lg:items-start sm:text-sm sm:justify-center sm:items-center  md:flex-row sm:flex-col flex-col gap-[25px] md:gap-[15px] sm:gap-[20px] justify-between  '>
        <ul className='lg:text-left text-center flex flex-col gap-3 md:text-left'>
          <strong>Services</strong>
          {
            list.map(li=>(
              <Link key={li.id}> 
              <li>
                
                {
                  li.content
                 }
              </li>
              </Link>
            ))
          }
        </ul>
        <ul className='flex flex-col gap-3'>
          <strong>About Us</strong>
          <Link to={'/'}><li className='underline'>MuscleFlex.netlify.app</li></Link>
        </ul>
        <ul className='text-center  md:text-center  gap-5'>
          <strong>
            Social Media
          </strong>
          <p className='flex flex-col text-center sm:flex-col lg:flex-row  md:flex-col items-center justify-center gap-5 my-3'>

          <Link to={'https://www.linkedin.com/in/siddharth-prabhudesai/'}><li><FontAwesomeIcon className='text-blue-800' icon={faLinkedin}/></li></Link>
          <Link to={'https://github.com/Sidx005'}><li><FontAwesomeIcon icon={faSquareGithub}/></li></Link>
          <Link to={'https://x.com/SidD1327174'}><li><FontAwesomeIcon icon={faSquareXTwitter}/></li></Link>
          </p>
       
        </ul>
     </div>
     <div className="flex w-full text-center gap-5 flex-col my-[10px]">


     <hr className='w-full' />
     <p>@2024</p>

     </div>
   
    </div>
  )
}

export default Footer