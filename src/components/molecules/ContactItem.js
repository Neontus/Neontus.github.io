import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import { DarkModeContext } from '../../context/DarkModeContext';
import React, { useContext } from 'react';

const ContactItem = ({ icon, label, value, href }) => {
    const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <Icon icon={icon} size={20} className="text-gray-600" />
      <div>
        <Text variant="small" dark = {darkMode} className="font-medium text-gray-900">{label}</Text>
        {href ? (
          <a href={href} className="text-blue-600 hover:text-blue-800 transition-colors">
            <Text variant="body" dark = {darkMode}>{value}</Text>
          </a>
        ) : (
          <Text variant="body" dark = {darkMode}>{value}</Text>
        )}
      </div>
    </div>
  );
};

export default ContactItem;