import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppText/AppText";

const Card = ({ title, subtitle, imageUrl, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View styles={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
          testID="card-image"
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
