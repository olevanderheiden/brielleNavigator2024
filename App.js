import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider as PaperProvider } from "react-native-paper"; // Provider from react-native-paper
import { ThemeProvider } from "./objects/logic/theme";
import AppContent from "./objects/logic/navigationHandling";
import Toast from "react-native-toast-message"; // Import Toast
import ToastConfig from "./objects/logic/toastConfig"; // Import ToastConfig

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <PaperProvider>
        <AppContent />
        <Toast config={ToastConfig} ref={(ref) => Toast.setRef(ref)} />
      </PaperProvider>
    </ThemeProvider>
  );
}
