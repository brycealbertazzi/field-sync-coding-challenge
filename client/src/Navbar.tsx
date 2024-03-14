import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div className='nav-container'>
            <button className='nav-button' onClick={() => navigate('/')}>Home</button>
            <button className='nav-button' onClick={() => navigate('/save')}>Save</button>
            <button className='nav-button' onClick={() => navigate('/fetch')}>Fetch</button>
        </div>
    )
}
