import React from "react";
import { View, Text, Button } from "react-native";
import { useTheme } from "../../objects/logic/theme";
import { getStyles } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsView() {
  const { theme, isDarkMode, setTheme } = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.View}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>
        Current Theme: {isDarkMode ? "Dark" : "Light"}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonStyle}
          title={`Switch to ${isDarkMode ? "Light" : "Dark"} Theme`}
          onPress={() => setTheme(!isDarkMode)}
        />
      </View>
    </SafeAreaView>
  );
}
