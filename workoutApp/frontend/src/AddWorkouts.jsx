import axios from 'axios';
import React, { useState } from 'react';
import useAuthContext from './customhook/useAuthContext';
import { useNavigate } from 'react-router-dom';

const AddWorkouts = () => {
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [loads, setLoads] = useState('');
    const [error, setError] = useState('');
    const { user } = useAuthContext();
   const  navigate=useNavigate()
    const submitData = (e) => {
        e.preventDefault();

        if (title === '' || reps === '' || loads === '') {
            alert('Enter all details');
            return;
        }

        if (!user) {
            setError('Please login to submit');
            return;
        }

        axios.post('http://localhost:4000/api/workouts', 
            { title, reps, load: loads }, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            }
        )
        .then(response => {
            console.log('Data submitted successfully:', response.data);
            alert('Posted Successfully');
            setTitle('');
            setLoads('');
            setReps('');
            navigate('/workouts')
            setError('');
        })
        .catch(error => {
            console.error('Error submitting data:', error);
            setError('Error submitting data');
        });
    };

    return (
        <div className='min-h-[80vh] flex flex-col p-5'>
            <form onSubmit={submitData} className='flex flex-col p-8 bg-blue-600 my-[250px] gap-2'>
                <label htmlFor="Title">
                    Title:
                    <input 
                        type='text' 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        id='Title'  
                    />
                </label>
                <label htmlFor="Reps">
                    Reps:
                    <input 
                        type='number' 
                        value={reps} 
                        onChange={(e) => setReps(e.target.value)} 
                        id='Reps'  
                    />
                </label>
                <label htmlFor="Loads">
                    Loads:
                    <input 
                        type='number' 
                        value={loads} 
                        onChange={(e) => setLoads(e.target.value)} 
                        id='Loads'  
                    />
                </label>
                <button type='submit'>Post</button>
                {error && <p className='text-red-500'>{error}</p>}
            </form>
        </div>
    );
};

export default AddWorkouts;
