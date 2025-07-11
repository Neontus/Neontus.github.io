import React, { createContext, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // console.log(`Dark mode is now ${!darkMode ? 'enabled' : 'disabled'}`);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
};

export { DarkModeContext, DarkModeProvider };