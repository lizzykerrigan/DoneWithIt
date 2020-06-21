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
      title: "Lizzy Kerrigan",
      description:
        "Hey! Just wanted to message you about that couch you were selling a while back...",
      image: require("../assets/lizzy.jpeg"),
    },
    {
      id: 2,
      title: "Lizzy Kerrigan",
      description:
        "Hey! Just wanted to message you about that couch you were selling a while back...",
      image: require("../assets/lizzy.jpeg"),
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
          setRefreshing(true);
          setTimeout(() => {
            setRefreshing(false);
          }, 1000);
        }}
      />
    </ScreenComponent>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
