import React from 'react'
import { useState } from 'react'

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showCpassword, setShowCpassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [cpassword, setCpassword] = useState('');
    return (
        <form className='flex flex-col space-y-3'>
            <input type="text" name="" id=""
                placeholder='Enter Your Name'
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                className='border-2 border-gray-100 focus:border-gray-200 rounded-md outline-none py-1 pl-2'
            />
            <input type="text" name="" id=""
                placeholder='Enter Your Email Address'
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
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
            <div className='relative'>
                <input type={showCpassword ? 'text' : 'password'} name="" id=""
                    placeholder='Enter Password'
                    value={cpassword}
                    onChange={(e) => { setCpassword(e.target.value) }}

                    className='border-2 border-gray-100 focus:border-gray-200 rounded-md outline-none py-1 pl-2 w-full'
                />
                <span
                    onClick={() => { setShowCpassword(!showCpassword) }}
                    className='absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 px-2 text-gray-700 cursor-pointer select-none'>
                    {showCpassword ? 'Hide' : 'Show'}
                </span>
            </div>
            <button className='bg-sky-500 text-white py-1 rounded-md font-semibold'>Sign Up</button>
        </form>
    )
}

export default Signup