import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider as PaperProvider } from "react-native-paper"; // Provider from react-native-paper
import { ThemeProvider } from "./objects/logic/theme";
import AppContent from "./objects/logic/navigationHandling";
import Toast from "react-native-toast-message"; // Import Toast

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <PaperProvider>
        <AppContent />
        <Toast ref={(ref) => Toast.setRef(ref)} /> {/* Add Toast component */}
      </PaperProvider>
    </ThemeProvider>
  );
}
