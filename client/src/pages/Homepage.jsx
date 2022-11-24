import React from 'react'
import { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup';

function Homepage() {
  const [login, setLogin] = useState(true);
  return (
    <div className='mx-auto w-full max-w-md p-5 bg-white mt-20 rounded-md overflow-hidden shadow-xl shdow-gray-300'>
      <div className='flex mb-5'>
        <button
          onClick={() => { setLogin(!login) }}
          className={`rounded-full ${login ? 'bg-sky-100' : 'hover:bg-sky-50'}  w-full py-1.5 font-semibold text-gray-600 `}
        >
          Login
        </button>
        <button
          onClick={() => { setLogin(!login) }}
          className={`rounded-full ${login ? 'hover:bg-sky-50' : 'bg-sky-100'}  w-full py-1.5 font-semibold text-gray-600`}
        >
          Signup
        </button>
      </div>
      {login ?
        <Login />
        : <Signup />
      }
    </div>
  )
}

export default Homepage