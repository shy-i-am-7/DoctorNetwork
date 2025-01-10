import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isPhysician, setIsPhysician] = useState(true);

  // Toggle the theme
  const toggleTheme = () => {
    setIsPhysician((prev) => !prev);
    document.documentElement.setAttribute('data-theme', !isPhysician ? 'physician' : 'resident');
  };

  return (
    <ThemeContext.Provider value={{ isPhysician, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
