import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Card from "../components/Card";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Card
        image={require("../assets/background.jpg")}
        title="Red jacket"
        subtitle="£100"
      />
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell what you don't need.</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton color="primary" title="Login" />
        <AppButton color="secondary" title="Register" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontWeight: "600",
    fontSize: 25,
    paddingVertical: 20,
  },
});
