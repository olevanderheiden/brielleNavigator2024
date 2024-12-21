import { View, Text } from "react-native";
import { useTheme } from "../../objects/logic/theme";
import { getStyles } from "../../styles";

// HomeView is the home screen of the app that provides an overview of the app's functionality
export default function HomeView() {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.View}>
      <Text style={styles.title}>Welkom in de Brielle Navigatie app 2024</Text>
      <Text style={styles.text}>
        Deze app is ontworpen om u te helpen bij het verkennen van de stad. Dit
        is hoe het werkt:
      </Text>
      <Text style={styles.text}>
        - Open de kaart om te zien waar de bezienswaardigheden zich bevinden en
        deze eventueel toe te voegen aan uw favorieten.
      </Text>
      <Text style={styles.text}>
        - Klik op een bezienswaardigheid om deze toe te voegen aan uw
        favorieten.
      </Text>
      <Text style={styles.text}>
        - In favorieten kunt u een bezienswaardigheid uit uw favorieten
        verwijderen of meer details bekijken.
      </Text>
      <Text style={styles.text}>
        - In het instellingenmenu kunt u het thema van de app van licht naar
        donker veranderen.
      </Text>
      <Text style={styles.text}>
        Veel plezier met het verkennen van de stad!
      </Text>
    </View>
  );
}
