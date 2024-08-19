import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClock, faPenToSquare, faStopwatch } from '@fortawesome/free-solid-svg-icons'; 
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import useAuthContext from './customhook/useAuthContext';
const Workouts = () => {
    const[data,setData]=useState([]);
    const[open,setOpen]=useState(false);
    const [currentWorkout, setCurrentWorkout] = useState(null);
    const[loading,setload]=useState(false);
    const[load,setLoad
    ]=useState(false)

    const [title,setTitle]=useState('');
const[reps,setReps]=useState('');
const[loads,setLoads]=useState('');
const {user}=useAuthContext()

    const fetchData=()=>{
        setLoads(true)
        const response=axios.get('https://muscleflex.onrender.com/api/workouts',{
            headers:{
                'Authorization':`Bearer ${user.token}`
            }
        })
        .then(response=>{
            setData(response.data);
            console.log(response.data);
            setLoad(false)
        })
        .catch(err=>{
            console.error(err);
    })
    
    }
    useEffect(()=>{
    if(user){
        fetchData()
    }
    },[user])


    if(!user){
    
        return alert('Please Login')
    }
    const openDialog=(workouts)=>{
        setCurrentWorkout(workouts._id);

        setTitle(workouts.title);
        setLoads(workouts.load);
        setReps(workouts.reps);
        setOpen(true);

    }
    const update=(id)=>{
        axios.patch(`https://muscleflex.onrender.com/api/workouts/${id}`,{title,reps,loads})
        .then(response => {
            console.log(response.data);
            fetchData();
            setOpen(false);
            alert(`Success ${id}`)
            
        })
        .catch(err => {
            console.error(err);
            alert('Error')
        })
    }
    const deleteWorkout=(id)=>{

        axios.delete(`https://muscleflex.onrender.com/api/workouts/${id}`,{

      headers:{
        'Authorization':`Bearer ${user.token}`
      }
        })
        .then(res=>{
            alert(`Deleted ${id}`);
            fetchData();
        })
        .catch(err=>{
            console.error(err);
        })
            }
  return (
    <div className='min-h-[50vh]  mb-[10%] w-full flex flex-col justify-center items-center'>
        <div className="h-[50vh] flex justify-end w-full p-6">
        <Link className='text-white ' to={'/watch'}>StopWatch <FontAwesomeIcon icon={faClock}/></Link>

        </div>
        <h1 className='text-white flex gap-5'>Workouts </h1>
       
        {open&&<dialog open={open}  className='bg-[rgba(0,0,0,.5)] backdrop backdrop-blur-lg p-5  w-full z-[999] flex flex-col  h-full  items-center flex-col justify-center backdrop-blur-lg' >
          <button onClick={()=>setOpen(false)}>❎</button>  
                        <form onSubmit={(e)=>{e.preventDefault();
                            update(currentWorkout)
                        }} className='flex flex-col gap-5' action="">
                            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" />
                            <input onChange={(e)=>setReps(e.target.value)} value={reps} type="number" />
                            <input onChange={(e)=>setLoads(e.target.value)} value={loads} type="number" />
                            <button className='bg-red-500 text-white'>Submit</button>
                        </form>
                       </dialog>}
                       
         <motion.div className='text-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 m-[50px]'>
            {
                data && data.map((workouts)=>(
                    <motion.div key={workouts._id} className='flex flex-col gap-5 w-[auto] min-h-[200px] bg-white text-black rounded p-5 shadow shadow-lg shadow-red-500 '>
                       <h1 className=''> <strong className='text-red-500'>Title:</strong> {workouts.title}</h1>
                       <p><strong>Reps:</strong> {workouts.reps}</p> 
                       <p className=''><strong>Loads:</strong> {workouts.load}</p>
                       <p className=''><strong>Time:</strong> {workouts.createdAt}</p>
                       <div className="buttons flex gap-5">
                        <button onClick={()=>openDialog(workouts)} className='bg-blue-800 w-7 border justify-center flex items-center border-solid border-black text-white rounded p-1'><FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button onClick={()=>{deleteWorkout(workouts._id),console.log(workouts._id);}} className='bg-red-500 w-8   flex items-center justify-center p-1 text-white border border-solid border-black rounded'><FontAwesomeIcon icon={faTrashCan}/></button>
                       </div>
                     
                        </motion.div>
                ))
            }
            </motion.div>      

            <Link to={'/addWorkouts'}><motion.button className='bg-red-500 font-bold text-white p-5 rounded-md w-40'>ADD</motion.button></Link>
        
    </div>
  )
}

export default Workouts