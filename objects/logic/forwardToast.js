import React from "react";
import Toast from "react-native-toast-message";
import ToastConfig from "./toastConfig"; // Import ToastConfig

// ForwardToast is a component that forwards the ref to the Toast component
const ForwardToast = React.forwardRef((props, ref) => (
  <Toast {...props} config={ToastConfig} ref={ref} />
));

export default ForwardToast;
