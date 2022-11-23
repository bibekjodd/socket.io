import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:5000');


function App() {
    const inputRef = useRef(null);
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    return (
        <div className='flex flex-col items-center pt-10'>
            <form
                onSubmit={handleSubmit}
                className='flex space-x-2 '
            >
                <input type="text" name="" id="" placeholder='Message...'
                    value={message}
                    ref={inputRef}
                    onChange={(e) => { setMessage(e.target.value) }}
                    className='pl-2 border-2 rounded-md outline-none w-60 focus:border-sky-500/50 transition-all duration-200'
                />
                <button className='bg-sky-500 text-white px-5 py-1 rounded-md active:bg-sky-600 shadow-lg shadow-sky-200'>Send</button>
            </form>
        </div>
    )
}

export default App