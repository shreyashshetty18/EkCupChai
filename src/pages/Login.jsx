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
        <p className='text-xs sm:text-sm'>Don't have an Account?{" "}
          <Link to="/signup" className='text-black font-medium underline'>
            Sign Up
          </Link>
        </p>
      </div>
        {/* Center Content */}
        <div className='flex flex-grow items-center justify-center'>
          <div className='w-full max-w-xs'>
            <h2 className='text-xl sm:text:text-2xl font-bold text-center mb-6'>Welcome Back!</h2>
            <form className='space-y-3'>
              <input type="email" placeholder='Enter your Email' className='w-full px-3 py-2 bg-gray-200 rounded focus:outline-none focus:ring focus:border-yellow-400 text-sm'/>
              <button type='submit' className='w-full bg-chaiBrown text-white font-semibold py-2 rounded-full hover:bg-opacity-90 transition text-sm'>Continue</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login