// theme.js
import React, { createContext, useContext, useState } from "react";
import {
  MD3LightTheme as lightTheme,
  MD3DarkTheme as darkTheme,
} from "react-native-paper";

// Create a context for the theme
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light theme

  // Provide the correct theme object (light or dark)
  const theme = isDarkMode ? darkTheme : lightTheme;

  // Function to toggle the theme manually
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // Change theme const
  const setTheme = (isDark) => setIsDarkMode(isDark);

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Export the themes directly for use in styles.js
export const light = lightTheme;
export const dark = darkTheme;
