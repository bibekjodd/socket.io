import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function Login({ setError }) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        console.log("login called")
        e.preventDefault();
        if (loading)
            return;
        setLoading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post('http://localhost:5000/api/user/login', { email, password }, config)
            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false);
            navigate('/chats')
        } catch (error) {
            console.log(error)
            setLoading(false);
            setError(error.response.data.message)
        }
    }






    return (
        <div>

            <form
                onSubmit={handleSubmit}
                className='flex flex-col space-y-5'>
                <input type="text" name="email" id="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder='Enter Your Email Address'
                    className='form-input'
                />
                <div className='relative'>
                    <input type={showPassword ? 'text' : 'password'} name="password" id="password"
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        className='form-input'
                    />
                    <span
                        onClick={() => { setShowPassword(!showPassword) }}
                        className='show-hide'>
                        {showPassword ? 'Hide' : 'Show'}
                    </span>
                </div>
                <button
                    disabled={loading}
                    className={`submit-button ${loading ? 'text-sky-500' : ''} `}>
                    {loading && <AiOutlineLoading3Quarters className={`animate-spin`} />}
                    <span >
                        Login
                    </span>
                </button>

            </form>
        </div>

    )
}

export default Login