// import React, { useRef } from "react";

// function UserefExample() {
//   // Step 1: Create a ref to store the input element
//   const inputRef = useRef(null);

//   // Step 2: Define the function to focus the input
//   const handleFocus = () => {
//     // Access the DOM node and call the focus method
//     inputRef.current.focus();
//   };

//   return (
//     <div className=" flex flex-col items-center m-5 p-5">
//       {/* Step 3: Attach the ref to the input element */}
//       <input
//         className=" w-full text-center"
//         ref={inputRef}
//         type="text"
//         placeholder="Click the button to focus me 1"
//       />
//       <br />
//       <hr />
//       <button
//         className=" border-2 bg-slate-800 h-15 w-30 text-white p-2 rounded-xl"
//         onClick={handleFocus}
//       >
//         Focus the input
//       </button>
//     </div>
//   );
// }

// export default UserefExample;

// import React, { useEffect, useRef, useState } from 'react';

// function UserefExample() {
//   const [messages, setMessages] = useState(["Hello!", "How are you?"]);
//   const chatBoxRef = useRef(null);

//   // Function to simulate adding new messages
//   const addMessage = () => {
//     setMessages((prevMessages) => [...prevMessages, "New message!"]);
//   };

//   // Scroll to the bottom whenever a new message is added
//   useEffect(() => {
//     chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//   }, [messages]);

//   return (
//     <div>
//       <div
//         ref={chatBoxRef}
//         style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
//       >
//         {messages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//       </div>
//       <button onClick={addMessage}>Add Message</button>
//     </div>
//   );
// }

// export default UserefExample;

// ugly code
import React, { useState, useRef } from "react";

// function UserefExample() {
//   const [time, setTime] = useState(0);
//   const [intervalId, setIntervalId] = useState(null); // Use state to store the interval ID

//   const startTimer = () => {
//     if (intervalId !== null) return; // Already running, do nothing

//     const newIntervalId = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);

//     // Store the interval ID in state (triggers re-render)
//     setIntervalId(newIntervalId);
//   };

//   const stopTimer = () => {
//     clearInterval(intervalId);

//     // Clear the interval ID in state (triggers re-render)
//     setIntervalId(null);
//   };

//   return (
//     <div className='flex flex-col'>
//       <h1>Timer: {time}</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }

// better code

function UserefExample() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Already running, do nothing

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div className="flex flex-col">
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
export default UserefExample;
