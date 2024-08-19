import { faBox, faCube, faMessage, faSquare, faTimesRectangle, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import MessagesBot from './MessagesBot';

const Chatbox = ({ props, setOpen }) => {
  const closeRef = useRef(null);
const[full,setFull]=useState(false)
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]); 
  const[load,setLoad]=useState(false)
  const api = import.meta.env.VITE_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages(prev => [...prev, { type: 'user', content: input }]); 

    setInput('');
    if(input===''){
      setLoad(false)
      return;
    }
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${api}`,
        method: 'POST',
        data: { contents: [{ parts: [{ text: input }] }] },
      });
      const botMessage = response.data.candidates[0].content.parts[0].text;
      setMessages(prev => [...prev, { type: 'bot', content: botMessage }]); 
      setLoad(true)
      console.log(messages);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessages(prev => [...prev, { type: 'bot', content: 'Sorry, something went wrong.' }]);
    }
  };
  

  return (
    <motion.div
      drag
      dragConstraints={{ right: 125, top: -125, bottom: 125, left: -1025 }}
      ref={closeRef}
      className={`fixed bottom-20 overflow-hidden right-[0] z-[999] flex-col text-center p-5  rounded-lg ${full ? 'min-h-full h-[100%] w-full z-[9999]   p-5  justify-center items-center' : 'min-h-[400px] h-[400px]  w-[400px]'} ${props ? 'flex' : 'hidden'} bg-white shadow shadow-Fslate-600 shadow-lg`}
    >
      <button className='absolute top-4 right-10'  onClick={()=>setFull(!full)}><FontAwesomeIcon icon={faSquare} /></button>
      <button onClick={() => {setOpen(!open),setFull(false)}}>
        <FontAwesomeIcon className='absolute top-5 right-5' icon={faX} />
      </button>
      <strong className='font-Poppins italic'>
        FitBuddy <FontAwesomeIcon className='text-orange-400' icon={faMessage} />
      </strong>
      <MessagesBot load={load} messages={messages} />
      <form onSubmit={handleSubmit} className="flex mt-2">
        <input
          className='border rounded-md border-solid border-black p-1 text-[10px]'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Ask anything about Fitness...'
          type="text"
        />
        <button
          type='submit'
          className='bg-orange-500 p-1 mx-2 text-[10px] rounded-lg font-bold text-white shadow-sm shadow-gray-400 italic'
        >
          Submit
        </button>
        <button onClick={()=>setMessages([])}>Clear</button>
      </form>
    </motion.div>
  );
};

export default Chatbox;
