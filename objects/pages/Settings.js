import React from "react";
import { View, Text, Button } from "react-native";
import { useTheme } from "../../objects/logic/theme";
import { getStyles } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsView() {
  //Get the current theme and styles
  const { theme, isDarkMode, setTheme } = useTheme();
  const styles = getStyles(theme);

  return (
    //View with the current theme and a button to switch the theme
    <SafeAreaView style={styles.View}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>
        {/*Display the current theme*/}
        Huidig thema: {isDarkMode ? "Donker" : "Licht"}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonStyle}
          //Switch the theme when the button is pressed
          title={`Switch to ${isDarkMode ? "Licht" : "Donker"} Theme`}
          onPress={() => setTheme(!isDarkMode)}
        />
      </View>
    </SafeAreaView>
  );
}
