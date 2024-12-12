import React, { useEffect, useState } from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider as PaperProvider } from "react-native-paper"; // Provider from react-native-paper
import { ThemeProvider, useTheme } from "./objects/logic/theme";
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
