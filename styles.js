import { StyleSheet } from "react-native";

// Function to get styles based on the current theme
export const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background, // Background color based on theme
    },
    map: {
      width: "100%",
      height: "100%",
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      color: theme.colors.onBackground,
      fontWeight: "bold",
      marginBottom: 20,
    },
    buttonContainer: {
      marginTop: 20,
    },
    buttonStyle: {
      backgroundColor: theme.colors.accent,
    },
    buttonText: {
      color: theme.colors.onAccent,
    },
  });
};
