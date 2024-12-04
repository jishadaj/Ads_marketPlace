import React from 'react';

const Button = ({ children, onClick, className, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#F50963] text-white px-4 py-2 rounded-3xl font-medium hover:bg-black ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
