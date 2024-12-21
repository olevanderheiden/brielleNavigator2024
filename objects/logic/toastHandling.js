import Toast from "react-native-toast-message";

//Toast messages for adding or removing a landmark from favorites
export default function favoritesToast(landMark, status, styles) {
  // Show a success toast message when a landmark is added to favorites
  if (status) {
    Toast.show({
      type: "success",
      text1: "Toegevoegd aan favorieten",
      text2: landMark.title.nl,
      style: styles.toastSuccess,
    });
  }
  // Show an info toast message when a landmark is removed from favorites
  else if (!status) {
    Toast.show({
      type: "info",
      text1: "Verwijderd uit favorieten",
      text2: landMark.title.nl,
      style: styles.toastInfo,
    });
  }
}
