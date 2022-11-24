import React from 'react'
import { useState } from 'react'

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form className='flex flex-col space-y-3'>
            <input type="text" name="" id=""
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                placeholder='Enter Your Email Address'
                className='border-2 border-gray-100 focus:border-gray-200 rounded-md outline-none py-1 pl-2'
            />
            <div className='relative'>
                <input type={showPassword ? 'text' : 'password'} name="" id=""
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    className='border-2 border-gray-100 focus:border-gray-200 rounded-md outline-none py-1 pl-2 w-full'
                />
                <span
                    onClick={() => { setShowPassword(!showPassword) }}
                    className='absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 px-2 text-gray-700 cursor-pointer select-none'>
                    {showPassword ? 'Hide' : 'Show'}
                </span>
            </div>
            <button className='bg-sky-500 text-white py-1 rounded-md font-semibold'>Login</button>
        </form>
    )
}

export default Login