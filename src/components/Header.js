import React from 'react';
import logo from '../assets/logo.png.png'
import nav from '../assets/arrow.png'
import Button from './Button'
import Profile from '../assets/profile.png'
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate()

  return (
    <header className="flex items-center justify-between px-20 py-4 shadow-lg w-full max-w-full">

      <div className="text-xl font-bold text-gray-800">
        <a href="/">
          <img src={logo} alt="Buy & Sell Logo" className="h-8" />
        </a>
      </div>

      <div className="space-x-6 flex items-center">
        <button className="flex items-center text-sm font-medium text-black hover:underline">
          <img src={Profile} alt="Profile Icon" className="h-4 w-4 mr-2" />
          Signup
        </button>
        <Button
          onClick={() => window.location.href = '/manage/posts'}
          className="flex items-center"
        >
          Post Your Ad
          <img src={nav} alt="Right Arrow" className="ml-2 h-4 w-4" />
        </Button>

        <button onClick={() => navigate('/manage/account')} className='text-[#667085] px-4 py-2 rounded-3xl font-normal transition-colors duration-300 ease-in-out hover:bg-black hover:text-white border-1'>Manage</button>
      </div>
    </header>
  );
};

export default Header;
