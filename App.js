import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  const netInfo = useNetInfo();
  console.log(netInfo.isInternetReachable);

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
