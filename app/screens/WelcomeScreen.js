import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import colors from "../config/colors";
import Button from "../components/Button";
import Card from "../components/Card";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell what you don't need.</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          color="primary"
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          color="secondary"
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
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
