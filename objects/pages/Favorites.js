import { useEffect, useState, useCallback } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../../objects/logic/theme";
import { getStyles } from "../../styles";
import { Button } from "react-native-paper";
import updateFavoriteStatus from "../logic/favoritesHandling";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

//change loaded to inform the component that the data has been loaded
export function changeLoaded() {
  setLoaded(false);
}

//default overcoopling function for loading showing and updating the favorites from the AsyncStorage
export default function FavoritesView() {
  // Get the current theme and styles
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation();
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
      // Set loaded to true after loading the data
      setLoaded(true);
    } catch (error) {
      console.error("Error loading favorites:", error);
      setLoaded(true);
    }
  }

  //per item in the list of favorites, show the title and two buttons to remove the item or view the details
  const Item = ({ landMarkObject }) => (
    <View style={styles.container}>
      <Text style={styles.text}>
        {landMarkObject?.title.nl || "No title available"}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() =>
            updateFavoriteStatus(landMarkObject, () => setLoaded(false), styles)
          }
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonText}>Verwijderen</Text>
        </Button>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate("Details", {
              landMarkObject: landMarkObject,
            })
          }
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonText}>Details</Text>
        </Button>
      </View>
      <View style={styles.devider} />
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
  }
  //Show the favorites list if the data is loaded
  else {
    return (
      <SafeAreaView style={styles.View}>
        <Text style={styles.title}>Favorites List</Text>
        <FlatList
          data={localData}
          renderItem={({ item }) => <Item landMarkObject={item} />}
          keyExtractor={(item, index) => index.toString()} // Ensure keyExtractor is set
        />
      </SafeAreaView>
    );
  }
}
