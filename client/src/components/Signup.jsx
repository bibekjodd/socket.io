import React from 'react'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Signup({ setError }) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showCpassword, setShowCpassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        console.log("signup called")
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

            const { data } = await axios.post('http://localhost:5000/api/user', { name, email, password }, config)
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
                <input type="text" name="name" id="name"
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    className='form-input'
                />
                <input type="text" name="email" id="email"
                    placeholder='Enter Your Email Address'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
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
                <div className='relative'>
                    <input type={showCpassword ? 'text' : 'password'} name="cpassword" id="cpassword"
                        placeholder='Confirm Password'
                        value={cpassword}
                        onChange={(e) => { setCpassword(e.target.value) }}

                        className='form-input'
                    />
                    <span
                        onClick={() => { setShowCpassword(!showCpassword) }}
                        className='show-hide'>
                        {showCpassword ? 'Hide' : 'Show'}
                    </span>
                </div>
                <button
                    disabled={loading}
                    className={`submit-button`}>
                    {loading && <AiOutlineLoading3Quarters className={`animate-spin`} />}
                    <span >
                        Signup
                    </span>
                </button>
            </form>
        </div >
    )
}

export default Signup