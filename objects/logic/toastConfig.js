import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "./theme";
import { getStyles } from "../../styles";

const ToastConfig = {
  success: ({ text1, text2, ...rest }) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);
    console.log(styles.backgroundColor);
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
