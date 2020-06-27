import React, { useState } from "react";
import { StyleSheet, TextInput, View, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/defaultStyles";

const AppTextInput = ({ icon, width = "100%", ...textInputProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          iconColor={defaultStyles.colors.midGrey}
          style={styles.icon}
          testID="icon"
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.midGrey}
        style={defaultStyles.text}
        {...textInputProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});
