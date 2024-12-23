import React, { useEffect, useState } from "react";
import { Text, View, Alert } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location"; // Import expo-location for location permissions
import { useTheme } from "../../objects/logic/theme"; // Import useTheme to get the current theme
import { getStyles } from "../../styles"; // Import getStyles to dynamically fetch the styles
import updateFavoriteStatus from "../logic/favoritesHandling"; // Import the function to update favorite status
import { useNavigation } from "@react-navigation/native";

export default function ViewMap() {
  // Get the current theme and styles
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]); // Store favorite landmarks
  const [location, setLocation] = useState(null); // Store user location
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false); // State to check if data is loaded
  const [region, setRegion] = useState(null); // To store and update the map region

  // Default location (Brielle)
  const defaultRegion = {
    latitude: 51.9017,
    longitude: 4.163,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  // Get device location data
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync(); // Request permission
      if (status === "granted") {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords); // Set the user's location
        setRegion({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      } else {
        // If permission is denied, use the default region (Brielle)
        setRegion(defaultRegion);
        Alert.alert(
          "Locatie permissie vereist",
          "Deze app heeft locatiepermissies nodig om uw positie op de kaart weer te geven. U kunt dit inschakelen in de app-instellingen op uw mobiele apparaat.",
          [{ text: "OK" }]
        );
      }
    };

    getLocation();
  }, []);

  // Fetch markers data from the API and initialize the map
  useEffect(() => {
    const getLocations = async () => {
      try {
        const response = await fetch(
          "https://stud.hosted.hr.nl/1034047/brielleApi.json"
        );
        const json = await response.json();
        setData(json.items); // Set the fetched markers data
        setLoaded(true); // Set loaded to true when data is fetched
      } catch (error) {
        console.error(error);
      }
    };

    getLocations();
  }, []);

  // If data or location is not loaded, display loading message
  if (!loaded || !region) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region} // Set the region dynamically based on user location or default
        onRegionChangeComplete={(region) => setRegion(region)} // Update region when the map is moved
        customMapStyle={styles.mapStyle}
      >
        {/* Render markers from the fetched data */}
        {data.map((landMark) => (
          <Marker
            key={landMark.id}
            coordinate={{
              latitude: landMark.latitude,
              longitude: landMark.longitude,
            }}
            title={landMark.title.nl}
            description={landMark.description.nl}
            pinColor={
              favorites.some((fav) => fav.id === landMark.id) ? "gold" : "red"
            }
            onPress={() => updateFavoriteStatus(landMark, null, styles)}
            onLongPress={() =>
              navigation.navigate("Details", {
                title: landMark.title.nl,
                description: landMark.description.nl,
              })
            }
          />
        ))}

        {/* Marker to display users location*/}
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            pinColor="blue"
            title="Uw locatie"
            description="U bevindt zich hier."
          />
        )}
      </MapView>
    </View>
  );
}
