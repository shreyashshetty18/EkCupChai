import React from 'react'
import logo from "../assets/ecc_logo.png";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='min-h-screen bg-white flex flex-col justify-between px-4 py-6'>
      {/* Top Bar Logo + Signup*/}
      <div className='w-full flex justify-between items-center px-2 sm:px-6 mb-8'>
        <Link to="/">
        <img src={logo} 
        alt="Logo"
        className='w-6 h-6 sm:w-8 sm:h-8 cursor-pointer' />
        </Link>
      </div>

    </div>
  )
}

export default Login