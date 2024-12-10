// theme.js
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  MD3LightTheme as lightTheme,
  MD3DarkTheme as darkTheme,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a context for the theme
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light theme

  // Load the theme from AsyncStorage on mount
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme !== null) {
          setIsDarkMode(savedTheme === "dark");
        }
      } catch (error) {
        console.error("Failed to load theme", error);
      }
    };
    loadTheme();
  }, []);

  // Provide the correct theme object (light or dark)
  const theme = isDarkMode ? darkTheme : lightTheme;

  // Function to toggle the theme manually
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // Change theme const
  const setTheme = async (isDark) => {
    try {
      const newTheme = isDark ? "dark" : "light";
      await AsyncStorage.setItem("theme", newTheme);
      setIsDarkMode(isDark);
    } catch (error) {
      console.error("Failed to save theme", error);
    }
  };

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
