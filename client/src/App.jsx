import React from 'react'
import { Routes, Route } from 'react-router-dom'
import bg from './components/bg.png'
import ChatPage from './pages/ChatPage'
import Homepage from './pages/Homepage'

function App() {
    return (
        <div className=''>
           
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/chats' element={<ChatPage />} />
            </Routes>
        </div>
    )
}

export default App