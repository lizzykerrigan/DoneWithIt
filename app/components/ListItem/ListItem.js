import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../AppText/AppText";

import colors from "../../config/colors";

const ListItem = ({ title, subtitle, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subtitle: {
    color: colors.midGrey,
  },
  title: {
    fontWeight: "500",
  },
});
