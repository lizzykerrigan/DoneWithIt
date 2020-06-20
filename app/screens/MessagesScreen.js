import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ScreenComponent from "../components/ScreenComponent";
import ListItemSeparator from "../components/ListItemSeparator";

const MessagesScreen = () => {
  const messages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/jacket.jpg"),
    },
  ];

  return (
    <ScreenComponent>
      <FlatList
        data={messages}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </ScreenComponent>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
