import { StyleSheet } from "react-native";
import { MD3LightTheme as lightTheme, MD3DarkTheme as darkTheme } from "react-native-paper";

// Get theme-based styles
export const getTheme = (scheme) => {
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return StyleSheet.create({
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    tabBarStyle: {
      backgroundColor: theme.colors.primary,
    },
  });
};
