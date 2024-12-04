import React from 'react';
import logo from '../assets/logo-white-2.png.png'
import Fb from '../assets/fb.png'
import Tw from '../assets/twitter.png'
import Be from '../assets/Be.png'
import Yt from '../assets/yt.png'

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-[#1E1E1E] text-white px-20 py-4 w-full max-w-full">

      <div className="text-lg font-bold flex items-center space-x-8">
        <img src={logo} alt="Buy & Sell Logo" className="h-8" />
        <div className="h-6 border-l border-[#F50963]"></div>
        <span className='font-extralight text-gray-500'>Copyright 2024</span>
      </div>

      <div className="space-x-4 flex">
        <img src={Fb} alt="fb" className="ml-2 h-4 w-4" />
        <img src={Tw} alt="Tw" className="ml-2 h-4 w-4" />
        <img src={Be} alt="Be" className="ml-2 h-4 w-4" />
        <img src={Yt} alt="Yt" className="ml-2 h-4 w-4" />
      </div>

    </footer>
  );
};

export default Footer;
