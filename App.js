import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "./objects/logic/theme";
import AppContent from "./objects/logic/navigationHandling";
import ForwardToast from "./objects/logic/forwardToast";

//Main app export and wrapping in ThemeProvider and PaperProvider allows for the use of the theme and toast in the app
export default function App() {
  return (
    <ThemeProvider>
      <PaperProvider>
        <AppContent />
        <ForwardToast />
      </PaperProvider>
    </ThemeProvider>
  );
}
