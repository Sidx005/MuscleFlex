import { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './Hero';
import Navbar from './Navbar';
import Workouts from './Workouts';
import AddWorkouts from './AddWorkouts';
import Cards from './Cards';
import Footer from './Footer';
import StopWatch from './StopWatch';
import Services from './Services';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Chatbot from './Chatbot';
import useAuthContext from './customhook/useAuthContext';
import Profile from './Profile';

function App() {
const {user}=useAuthContext()

  return (
    <Router>
      <motion.div className='flex items-center  overflow-x-hidden flex-col p-0 min-h-[100vh] bg-black w-full'>
        <Navbar />
        <div className='h-[10vh] p-[5%]'></div>
        <Routes>
          <Route path="/" element={
            
            <>
            <Hero />
          <Services/>
          <Cards/>
            </>} />
          <Route path='/workouts' element={user?<Workouts/>:<Navigate to={'/login'}/>} />
          <Route path='/addWorkouts' element={user?</Route><AddWorkouts/>:<Navigate to={'/login'}/>} />
          
<Route path='/watch' element={<StopWatch/>}/>
<Route path='/login' element={!user?<LoginForm/>:<Navigate to={'/'}/>}/>
<Route path='/signUp' element={!user?<SignupForm/>:<Navigate to={'/'}/>}/>
<Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Chatbot/>
      </motion.div>      
        <Footer />

    </Router>
  );
}

export default App;
