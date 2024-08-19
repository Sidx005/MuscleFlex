import React, { useState } from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';
import useAuthContext from './customhook/useAuthContext';

const useSignup = () => {
    const [Error, setError] = useState(null);
    const [loading, setLoad] = useState(false);
    const {dispatch}=useAuthContext()
    const signup = async (email, password) => {
        setLoad(true);
        setError(null);
    
        try {
            const response = await axios.post('http://localhost:4000/api/users/signup', { email, password });
            console.log(response.data); // Log the response
            setLoad(false);
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({type:'LOGIN',payload:json})
        } catch (err) {
            console.error(err); // Log the error
            setLoad(false);
            setError(err.response?.data?.mssg || 'Signup failed');
        }
    };
    

    return { signup, Error, loading };
};

export default useSignup;
