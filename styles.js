import { StyleSheet } from "react-native";

// Function to dynamically get styles based on the current theme
export const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    // Add styles for the map
    map: {
      width: "100%",
      height: "100%",
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
    //Add styles for loading screens
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    // Add styles for the text
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
    // Add styles for the buttons and button containers
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonStyle: {
      color: theme.colors.onBackground,
      backgroundColor: theme.colors.primary,
      width: "45%",
      height: 50,
      justifyContent: "center",
      margin: 4,
    },
    buttonText: {
      color: theme.colors.onBackground,
      fontSize: 10,
    },
    // Add styles for deviders that separate items
    devider: {
      height: 1,
      backgroundColor: theme.colors.onBackground,
      width: "100%",
      marginBottom: 10,
    },
    // Add styles for view containers
    View: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    header: {
      backgroundColor: theme.colors.background,
      color: theme.colors.onBackground,
      borderBottomColor: theme.colors.border,
      borderBottomWidth: 1,
    },
    // Add styles for the tab bar and tab bar items
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
    // Add styles for the toast and toast content
    toastSuccess: {
      backgroundColor: theme.colors.background,
      borderColor: "rgba(3, 252, 15, 0.29)",
      borderWidth: 1,
      padding: 12,
    },
    toastInfo: {
      backgroundColor: theme.colors.background,
      borderColor: "rgba(3, 127, 252, 1)",
      borderWidth: 1,
      padding: 10,
    },
    toastSuccessBar: {
      width: 5,

      backgroundColor: "rgba(3, 252, 15, 0.29)",
      flex: 0.05,
    },
    toastInfoBar: {
      width: 5,
      height: "10%",
      backgroundColor: "rgba(3, 127, 252, 1)",
      flex: 0.05,
    },
    toastContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 5,
      maxHeight: 80,
    },
    toastContent: {
      flex: 0.95,
      paddingLeft: 10,
    },
  });
};
