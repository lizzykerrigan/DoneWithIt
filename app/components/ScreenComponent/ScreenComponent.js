import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";

import colors from "../../config/colors";

const ScreenComponent = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenComponent;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
