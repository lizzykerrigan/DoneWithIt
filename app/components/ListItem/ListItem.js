import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import AppText from "../AppText/AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";

const ListItem = ({
  title,
  subtitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subtitle: {
    color: colors.midGrey,
  },
  title: {
    fontWeight: "500",
  },
});
