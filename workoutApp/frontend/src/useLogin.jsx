import React, { useState } from 'react'
import useAuthContext from './customhook/useAuthContext';
import axios from 'axios';
import { json } from 'react-router-dom';

const useLogin = () => {
const [Error,setError]=useState(null);
const [loading, setLoad] = useState(false);
const {dispatch}=useAuthContext()

const login=async(email,password)=>{
    setLoad(true);
    setError(null);
    try{
 const response=await axios.post('http://localhost:4000/api/users/login',{email,password});
 console.log(response.data);
 setLoad(false);
 localStorage.setItem('user',JSON.stringify(response.data));
 dispatch({type:'LOGIN',payload:response.data});

 
    }catch(err){
        console.error(err);
        setLoad(false)
    }
}

      return ({login,Error,loading})
}

export default useLogin