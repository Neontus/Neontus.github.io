import React from 'react';

const Text = ({ children, variant = 'body', className = '' }) => {
  const variants = {
    h1: 'text-4xl font-bold text-gray-900',
    h2: 'text-3xl font-semibold text-gray-900',
    h3: 'text-xl font-medium text-gray-900',
    body: 'text-base text-gray-600',
    small: 'text-sm text-gray-500'
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Text;
