import React from "react";
import { Text, ScrollView } from "react-native";
import { useTheme } from "../logic/theme";
import { getStyles } from "../../styles";

export default function Details({ route }) {
  // Get styles from theme
  const { theme } = useTheme();
  const styles = getStyles(theme);
  // Destructure landmark object passed from navigation
  const { landMarkObject } = route.params;
  const { title, description, latitude, longitude } = landMarkObject;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>{title.nl}</Text>

      {/* Description */}
      <Text style={styles.text}>{description.nl}</Text>

      {/* Coordinates */}
      <Text style={styles.text}>
        Coordinaten: {latitude}, {longitude}
      </Text>
    </ScrollView>
  );
}
