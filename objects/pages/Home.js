import { View, Text } from "react-native";
import { useTheme } from "../../objects/logic/theme";
import { getStyles } from "../../styles";

export default function HomeView() {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.View}>
      <Text style={styles.title}>Home!</Text>
    </View>
  );
}
