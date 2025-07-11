import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Sun, Moon } from 'lucide-react'; // Import icons for a dark mode toggle example

function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        {!darkMode ? <Moon size={24} color="black" /> : <Sun size={24} color="yellow" />}
        </button>
    );
}

export default DarkModeToggle;
