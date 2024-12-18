import { View, Text } from "react-native";
import { useTheme } from "../../objects/logic/theme";
import { getStyles } from "../../styles";

// HomeView is the home screen of the app that provides an overview of the app's functionality
export default function HomeView() {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.View}>
      <Text style={styles.title}>Welcome to Brielle Navigator 2024!</Text>
      <Text style={styles.text}>
        This app helps you explore landmarks in Brielle. Here's how it works:
      </Text>
      <Text style={styles.text}>
        - Open the Map menu to see where landmarks are located.
      </Text>
      <Text style={styles.text}>
        - Tap on a landmark to add it to your favorites.
      </Text>
      <Text style={styles.text}>
        - In the Favorites screen, you can either remove a landmark from your
        favorites or see more details about it.
      </Text>
      <Text style={styles.text}>
        - In the Settings menu, you can change the theme of the app from light
        to dark and change the app's language.
      </Text>
      <Text style={styles.text}>
        Enjoy exploring Brielle with Brielle Navigator 2024!{" "}
      </Text>
    </View>
  );
}
