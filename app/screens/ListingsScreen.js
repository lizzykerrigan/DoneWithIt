import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ScreenComponent from "../components/ScreenComponent";
import Card from "../components/Card";
import colors from "../config/colors";

const ListingsScreen = () => {
  const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: "£100",
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch in great condition",
      price: "£895",
      image: require("../assets/couch.jpg"),
    },
  ];

  return (
    <ScreenComponent style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subtitle={item.price} image={item.image} />
        )}
      />
    </ScreenComponent>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});
