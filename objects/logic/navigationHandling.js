import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { useTheme } from "../../objects/logic/theme";
import { getStyles } from "../../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../pages/Home";
import Map from "../pages/Map";
import Favorites from "../pages/Favorites";
import SettingsView from "../pages/Settings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../pages/details";

//creating navigators for the app
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

//Handling favorites visibility
let isFavoritesVisible = false;
let setIsFavoritesVisible = () => {};

//updating the visibility of the favorites tab
export const checkFavorites = async () => {
  try {
    const storedFavorites = await AsyncStorage.getItem("@favorites");
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

//Main app content and navigation handling
export default function AppContent() {
  const { theme } = useTheme(); // Get the current theme from context
  const styles = getStyles(theme);
  const [favoritesVisible, setFavoritesVisible] = useState(isFavoritesVisible);
  setIsFavoritesVisible = setFavoritesVisible;

  //initializing the favorites visibility
  useEffect(() => {
    checkFavorites();
  }, []);

  return (
    //Navigation container for the app(react-navigation tabbar)
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              initialRouteName="Home"
              barStyle={styles.tabBar}
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  const iconName = iconMapping[route.name];
                  return (
                    <MaterialCommunityIcons
                      name={iconName}
                      color={color || styles.tabBarIcon.color}
                      size={size || styles.tabBarIcon.size}
                    />
                  );
                },
                tabBarLabelStyle: {
                  color: styles.tabBarLabel.color,
                },
                tabBarActiveTintColor: styles.tabBarActiveLabel.color,
                tabBarStyle: {
                  backgroundColor: styles.tabBar.backgroundColor,
                },
              })}
            >
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="home"
                      color={styles.tabBarIcon.color}
                      size={styles.tabBarIcon.size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Map"
                component={Map}
                options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="map-search"
                      color={styles.tabBarIcon.color}
                      size={styles.tabBarIcon.size}
                    />
                  ),
                }}
              />
              {favoritesVisible && (
                <Tab.Screen
                  name="Favorites"
                  component={Favorites}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons
                        name="star"
                        color={styles.tabBarIcon.color}
                        size={styles.tabBarIcon.size}
                      />
                    ),
                  }}
                />
              )}
              <Tab.Screen
                name="Settings"
                component={SettingsView}
                options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="cog"
                      color={styles.tabBarIcon.color}
                      size={styles.tabBarIcon.size}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerBackTitleVisible: true,
            headerStyle: {
              backgroundColor: styles.header.backgroundColor,
            },
            headerTintColor: styles.header.color,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
