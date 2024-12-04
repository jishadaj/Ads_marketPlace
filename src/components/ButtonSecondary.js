import React from 'react';

const ButtonSecondary = ({ children, onClick, className, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full text-[#667085] px-4 py-2 rounded-3xl font-normal transition-colors duration-300 ease-in-out hover:bg-black hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
