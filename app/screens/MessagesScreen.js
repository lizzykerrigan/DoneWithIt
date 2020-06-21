import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ScreenComponent from "../components/ScreenComponent";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction/ListItemDeleteAction";

const MessagesScreen = () => {
  const initialMessages = [
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

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((el) => el.id !== message.id));
  };

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
            onPress={() => {
              console.log("Message selected", item);
            }}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/jacket.jpg"),
            },
          ]);
        }}
      />
    </ScreenComponent>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
