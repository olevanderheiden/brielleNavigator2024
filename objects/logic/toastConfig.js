import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "./theme";
import { getStyles } from "../../styles";

// ToastConfig is an object that contains the configuration for the toast messages and ensures they are styled according to the theme
const ToastConfig = {
  //success toast message styling setup
  success: ({ text1, text2, ...rest }) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);
    return (
      <View style={[styles.toastSuccess, { padding: 10 }]}>
        <View style={styles.toastSuccesBar} />
        <View style={styles.toastContent}>
          <Text style={styles.title}>{text1}</Text>
          <Text style={styles.text}>{text2}</Text>
        </View>
      </View>
    );
  },
  //info toast message styling setup
  info: ({ text1, text2, ...rest }) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);
    return (
      <View style={[styles.toastInfo, { padding: 10 }]}>
        <View style={styles.toastInfoBar} />
        <View style={styles.toastContent}>
          <Text style={styles.title}>{text1}</Text>
          <Text style={styles.text}>{text2}</Text>
        </View>
      </View>
    );
  },
};

export default ToastConfig;
