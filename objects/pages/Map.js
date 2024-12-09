import React, { useEffect, useState } from "react";
import { Text, View, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location"; // Import expo-location for location permissions
import { useTheme } from "../../objects/logic/theme"; // Import useTheme to get the current theme
import { getStyles } from "../../styles"; // Import getStyles to dynamically fetch the styles

export default function ViewMap() {
  const { theme } = useTheme(); // Get the current theme from context
  const [location, setLocation] = useState(null); // Store user location
  const [data, setData] = useState([]); // Store markers data
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
          "Location Permission Needed",
          "This app requires location permissions to show your position on the map. You can enable it in app settings.",
          [{ text: "OK" }]
        );
      }
    };

    getLocation();
  }, []);

  // Fetch markers data from the API
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

    getLocations(); // Fetch the locations when the component is mounted
  }, []);

  // If data or location is not loaded, display loading message
  if (!loaded || !region) {
    return (
      <View style={getStyles(theme).loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={getStyles(theme).container}>
      <MapView
        style={getStyles(theme).map}
        region={region} // Set the region dynamically based on user location or default
        onRegionChangeComplete={(region) => setRegion(region)} // Update region when the map is moved
        customMapStyle={mapStyle} //
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
          />
        ))}

        {/* Custom marker for user's location */}
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
            pinColor="blue" // Custom marker color (blue for user's location)
          />
        )}
      </MapView>
    </View>
  );
}
