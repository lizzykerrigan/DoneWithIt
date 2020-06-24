import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ScreenComponent from "../components/ScreenComponent";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

const ListingsScreen = ({ navigation }) => {
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
          <Card
            title={item.title}
            subtitle={item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
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
