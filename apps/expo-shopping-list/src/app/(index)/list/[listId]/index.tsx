import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, Text } from "react-native";

const ListDetails = () => {
  const { listId } = useLocalSearchParams<{ listId: string }>();
  return (
    <>
      <Stack.Screen options={{ title: "Details" }} />
      <FlatList
        data={[listId]}
        renderItem={({ item }) => <Text>{item}</Text>}
        contentInsetAdjustmentBehavior="automatic"
      />
    </>
  );
};

export default ListDetails;
