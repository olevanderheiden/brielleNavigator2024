import React from "react";
import { Text, ScrollView } from "react-native";
import { useTheme } from "../logic/theme";
import { getStyles } from "../../styles";

export default function Details({ route }) {
  // Get styles from theme
  const { theme } = useTheme();
  const styles = getStyles(theme);
  // Destructure parameters passed from navigation
  const { title, description } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Description */}
      <Text style={styles.text}>{description}</Text>
    </ScrollView>
  );
}
