import { useEffect, useState, useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../../objects/logic/theme";
import { getStyles } from "../../styles";
import { Button } from "react-native-paper";
import updateFavoriteStatus from "../logic/favoritesHandling";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export function changeLoaded() {
  setLoaded(false);
}
export default function FavoritesView() {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation(); // Get the navigation object

  console.log("FavoritesView rendered");
  // Initialize state for local data and loading status
  const [localData, setLocalData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Function to load favorites from AsyncStorage
  async function loadFavorites() {
    try {
      let landMarks = await AsyncStorage.getItem("@favorites");
      landMarks = JSON.parse(landMarks);

      if (landMarks && landMarks.length > 0) {
        // Filter out any null or invalid items
        landMarks = landMarks.filter(
          (item) => item && item.id && item.title && item.description
        );
        setLocalData(landMarks);
      } else {
        setLocalData([]);
      }

      setLoaded(true);
    } catch (error) {
      console.error("Error loading favorites:", error);
      setLoaded(true); // Set loading to true even in case of error
    }
  }

  // Item component for rendering the list of favorites
  const Item = ({ landMarkObject }) => (
    <View style={styles.container}>
      <Text style={styles.text}>
        {landMarkObject?.title.nl || "No title available"}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() =>
            updateFavoriteStatus(landMarkObject, () => setLoaded(false), styles)
          }
        >
          <Text style={styles.buttonText}>verwijder uit favorieten</Text>
        </Button>
        <Button
          onPress={() =>
            navigation.navigate("Details", {
              title: landMarkObject.title.nl,
              description: landMarkObject.description.nl,
            })
          }
        >
          <Text style={styles.buttonText}>details</Text>
        </Button>
      </View>
    </View>
  );

  // Use useFocusEffect to load favorites when the screen is focused
  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  // Load favorites when loaded is false
  useEffect(() => {
    if (!loaded) {
      loadFavorites();
    }
  }, [loaded]);

  // Show loading message if data is not loaded
  if (!loaded) {
    return (
      <View style={styles.View}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.View}>
        <Text style={styles.title}>Favorites List</Text>
        <FlatList
          data={localData}
          renderItem={({ item }) => <Item landMarkObject={item} />}
          keyExtractor={(item, index) => index.toString()} // Ensure keyExtractor is set
        />
      </View>
    );
  }
}
