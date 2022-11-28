import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup';

function Homepage() {
  const [login, setLogin] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {


    const timeout = setTimeout(() => {
      setError('');
    }, 3000);

    return (() => {
      clearTimeout(timeout);
    })




  }, [error])



  return (
    <div className='home mx-auto'>
      <div className='  sm:pt-20  w-full min-h-screen '>

        <div className='mx-auto w-full max-w-md p-5  bg-white/20  backdrop-blur-md  rounded-md overflow-hidden '>

          <div className='flex mb-5 space-x-0.5'>
            <button
              onClick={() => { setLogin(true) }}
              className={`rounded-full ${login ? 'bg-black/5' : 'hover:bg-black/5'}  w-full py-1.5 font-semibold text-white `}
            >
              Login
            </button>
            <button
              onClick={() => { setLogin(false) }}
              className={`rounded-full ${login ? 'hover:bg-black/5' : 'bg-black/5'}  w-full py-1.5 font-semibold text-white`}
            >
              Signup
            </button>
          </div>

          {error === '' ?
            <p className=' text-xl  text-white py-2 mb-5 text-center'>Enter Your {login ? "Login" : "Registration"}</p>
            : <p className=' text-xl text-red-500 bg-white/20 rounded-md py-2 mb-5 text-center'>{error}</p>
          }


          {login ?
            <Login setError={setError} />
            : <Signup setError={setError} />
          }
        </div>



      </div>
    </div>
  )
}

export default Homepage