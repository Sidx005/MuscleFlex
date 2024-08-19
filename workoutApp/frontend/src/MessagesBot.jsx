import React from 'react';

const MessagesBot = ({ load,messages }) => {
  return (
    <div className='flex flex-col w-full overflow-y-auto gap-4'>
      {messages.map((message, index) => (
        <div
          key={index}
          className={` ${message.type === 'bot' ? 'flex justify-start' : 'flex justify-end'} ${load?`flex`:`hidden`}`}
        >
          <div
            className={`p-3 text-left rounded-md ${message.type === 'bot' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}
          >
            <p>{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesBot;
