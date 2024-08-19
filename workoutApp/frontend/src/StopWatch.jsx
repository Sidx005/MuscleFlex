import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react'
import './StopWatch.css'
const StopWatch = () => {
    const[time,setTime]=useState(0);
    const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
    const incrememnt=useRef(null);

    const startTime=()=>{
        setIsActive(true);
        setIsPaused(false)
        incrememnt.current=setInterval(() => {
            setTime(time=>time+1)
        }, 10);
    }
    const stopTime=()=>{
        setIsPaused(true)
        clearInterval(incrememnt.current)
    }
    const restart=()=>{
        clearInterval(incrememnt.current);
        setIsPaused(false); 
        setTime(0)
    }
    const formatTime = () => {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }
    
  return (
    <div className='stopwatch min-h-[100vh] text-white flex gap-5 justify-center items-center flex-col w-full'>
        <FontAwesomeIcon icon={faClock}/>

            <h1>Stopwatch: {formatTime()}</h1>
            <div className="flex gap-5"><button onClick={startTime}>Start</button><button onClick={stopTime}>
                Stop</button>
                <button onClick={restart}>Restart</button>
                </div>


    </div>
  )
}

export default StopWatch