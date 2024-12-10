import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider as PaperProvider } from "react-native-paper"; // Provider from react-native-paper
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsView from "./objects/pages/Settings";
import Map from "./objects/pages/Map";
import Home from "./objects/pages/Home";
import Favorites from "./objects/pages/Favorites";
import AsyncStorage from "@react-native-async-storage/async-storage"; // AsyncStorage
import { ThemeProvider, useTheme } from "./objects/logic/theme";
import { getStyles } from "./styles";
import AppContent from "./objects/logic/navigationHandling";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <PaperProvider>
        <AppContent />
      </PaperProvider>
    </ThemeProvider>
  );
}
