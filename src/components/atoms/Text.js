import React from 'react';

const Text = ({ children, variant = 'body', dark = false, className = '' }) => {
  const variants = {
    h1: 'text-4xl font-bold text-gray-900',
    h2: 'text-3xl font-semibold text-gray-900',
    h3: 'text-xl font-medium text-gray-900',
    body: 'text-base text-gray-600',
    small: 'text-sm text-gray-500',
  };

  const variantsDark = {
    h1: 'text-4xl font-bold text-white',
    h2: 'text-3xl font-semibold text-white',
    h3: 'text-xl font-medium text-white',
    body: 'text-base text-gray-300',
    small: 'text-sm text-gray-400',
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component className={`${dark ? variantsDark[variant] : variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Text;
