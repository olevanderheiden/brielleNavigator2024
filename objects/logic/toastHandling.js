import Toast from "react-native-toast-message";

export default function favoritesToast(landMark, status, styles) {
  console.log(`style: ${styles.toastSuccess.backgroundColor}`);
  if (status) {
    Toast.show({
      type: "success",
      text1: "Toegevoegd aan favorieten",
      text2: landMark.title.nl,
      style: styles.toastSuccess,
    });
  } else if (!status) {
    Toast.show({
      type: "info",
      text1: "Verwijderd uit favorieten",
      text2: landMark.title.nl,
      style: styles.toastInfo,
    });
  }
}
