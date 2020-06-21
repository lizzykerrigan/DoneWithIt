import React from "react";
import { Text } from "react-native";

import defaultStyles from "../../config/defaultStyles";

const AppText = ({ children, style, ...textProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default AppText;
