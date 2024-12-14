import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkFavorites } from "./navigationHandling";
import favoritesToast from "./toastHandling";

export default async function updateFavoriteStatus(
  landMark,
  changeLoaded,
  styles
) {
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
      favoritesToast(landMark, false, styles);
      favorites.splice(index, 1);
      console.log("Landmark removed from favorites");
    } else {
      // Add the landmark to favorites
      favorites.push(landMark);
      console.log("Landmark added to favorites");
      favoritesToast(landMark, true, styles);
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
