import React, { useState } from 'react'
import Chatbox from './Chatbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBots } from '@fortawesome/free-brands-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
    const[open,setOpen]=useState(false);
    const clickOpen=()=>{
        setOpen(!open);
    }
  return (
    <div className='relative'>

    <button onClick={clickOpen} className='h-10 z-50 w-10 p- text-md border border-solid border-black bg-orange-400 text-white flex justify-center text-center items-center rounded-md fixed bottom-10 right-2'><FontAwesomeIcon icon={faRobot}/></button>
    <Chatbox  props={open} setOpen={setOpen}/>
    </div>

)
}

export default Chatbot