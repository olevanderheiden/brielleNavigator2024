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
    callout: {
      flex: 1,
      position: "relative",
      padding: 10,
      backgroundColor: "white",
      borderRadius: 10,
      width: 150,
    },
    calloutTitle: {
      fontWeight: "bold",
      fontSize: 16,
      marginBottom: 5,
    },
    calloutDescription: {
      fontSize: 14,
    },
    mapStyle: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: theme.colors.background,
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: theme.colors.onBackground,
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: theme.colors.background,
          },
        ],
      },
    ],
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
    text: {
      fontSize: 16,
      color: theme.colors.onBackground,
      marginBottom: 20,
    },
    buttonContainer: {
      marginTop: 20,
    },
    buttonStyle: {
      backgroundColor: theme.colors.accent,
    },
    View: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    tabBar: {
      backgroundColor: theme.colors.background,
    },
    tabBarActive: {
      backgroundColor: theme.colors.surface,
    },
    tabBarIcon: {
      color: theme.colors.primary,
      size: 26, // Add size property for the icon
    },
    tabBarLabel: {
      color: theme.colors.onBackground,
      backgroundColor: theme.colors.background,
    },
    tabBarActiveLabel: {
      color: theme.colors.primary,
      backgroundColor: theme.colors.background,
    },
    buttonText: {
      color: theme.colors.onAccent,
    },
  });
};
