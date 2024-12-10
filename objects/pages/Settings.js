import React from "react";
import { View, Text, Button } from "react-native";
import { useTheme } from "../../objects/logic/theme"; // Import useTheme
import { getStyles } from "../../styles"; // Import getStyles

export default function SettingsView() {
  const { theme, isDarkMode, setTheme } = useTheme(); // Get theme and theme-related info

  const styles = getStyles(theme); // Get styles based on the current theme

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>
        Current Theme: {isDarkMode ? "Dark" : "Light"}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title={`Switch to ${isDarkMode ? "Light" : "Dark"} Theme`} // Dynamically change the button text
          onPress={() => setTheme(!isDarkMode)} // Toggle the theme
        />
      </View>
    </View>
  );
}
