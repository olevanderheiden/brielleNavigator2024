import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkFavorites } from "./navigationHandling";
import Toast from "react-native-toast-message";

export default async function updateFavoriteStatus(landMark, changeLoaded) {
  if (!landMark || !landMark.id) {
    console.error("Invalid landmark object", landMark);
    return;
  }

  console.log("Updating favorite status for landmark", landMark.title.nl);
  try {
    const existingFavorites = await AsyncStorage.getItem("@favorites");
    let favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

    if (!Array.isArray(favorites)) {
      favorites = [];
    }

    const index = favorites.findIndex((item) => item.id === landMark.id);

    if (index !== -1) {
      // Remove the landmark from favorites
      Toast.show({
        type: "info",
        text1: "Removed from Favorites",
        text2: landMark.title.nl,
      });
      favorites.splice(index, 1);
      console.log("Landmark removed from favorites");
    } else {
      // Add the landmark to favorites
      favorites.push(landMark);
      console.log("Landmark added to favorites");
      Toast.show({
        type: "success",
        text1: "Favorite Added",
        text2: landMark.title.nl,
      });
    }

    await AsyncStorage.setItem("@favorites", JSON.stringify(favorites));
    if (changeLoaded) {
      changeLoaded();
    }
    checkFavorites(); // Check and update the visibility of the Favorites tab
  } catch (e) {
    console.error("Failed to update the favorite status", e);
  }
}
