import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '' }) => {
  const baseClasses = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500',
    primary_dark: 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-500',
    secondary_dark: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray',
    ghost_dark: 'text-white hover:text-gray-200 hover:bg-gray-700 focus:ring-gray-500',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-md',
    lg: 'px-6 py-3 text-base rounded-lg'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
