import React from "react";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../../assets/animations/loader.json")}
      testID="lottie-view"
    />
  );
};

export default ActivityIndicator;
