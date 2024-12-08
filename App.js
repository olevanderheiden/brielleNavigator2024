import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsView from './objects/pages/Settings';
import Map from "./objects/pages/Map";
import Home from "./objects/pages/Home";
import Favorites from "./objects/pages/Favorites";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [lang, setLang] = useState('en');
  const [isFavoritesVisible, setIsFavoritesVisible] = useState(false); // State to control visibility of Favorites tab

  // Check AsyncStorage to determine if the Favorites tab should be shown
  useEffect(() => {
    const checkFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('landMarks');
        if (storedFavorites && JSON.parse(storedFavorites).length > 0) {
          setIsFavoritesVisible(true); // Show the tab if there are stored favorites
        } else {
          setIsFavoritesVisible(false); // Hide the tab if no favorites are found
        }
      } catch (error) {
        console.error("Error checking AsyncStorage: ", error);
        setIsFavoritesVisible(false); // Default to hidden if there is an error
      }
    };

    checkFavorites(); // Run the check on mount
  }, []); // Empty dependency array so it runs once on mount

  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />

          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="map-search" color={color} size={26} />
              ),
            }}
          />

          {/* Conditionally render Favorites tab based on AsyncStorage */}
          {isFavoritesVisible && (
            <Tab.Screen
              name="Favorites"
              component={Favorites}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="star" color={color} size={26} />
                ),
              }}
            />
          )}

          <Tab.Screen
            name="Settings"
            component={SettingsView}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cog" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
