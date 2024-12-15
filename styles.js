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
      backgroundColor: theme.colors.surface,
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
      backgroundColor: theme.colors.background,
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
    devider: {
      height: 1,
      backgroundColor: theme.colors.onBackground,
      width: "100%",
      marginBottom: 10,
    },
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
      color: theme.colors.onBackground,
      fontSize: 10,
    },
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
