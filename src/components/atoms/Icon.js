import React from 'react';

const Icon = ({ icon: IconComponent, size = 20, className = '' }) => {
  return <IconComponent size={size} className={className} />;
};

export default Icon;
