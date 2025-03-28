import React from "react";
import Button from "../../components/button";
import { BodyScrollView } from "../../components/BodyScrollView";
import { useClerk } from "@clerk/clerk-expo";
import { Link, Stack, useRouter } from "expo-router";
import {
  FlatList,
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { IconSymbol } from "../../components/IconSymbol";
import { appleBlue, backgroundColors } from "../../constants/colors";
import { useShoppingListIds } from "../../store/ShoppingListsStore";
import IconCircle from "../../components/IconCircle";

const Home = () => {
  const router = useRouter();
  const shoppingIds = useShoppingListIds();

  console.log(shoppingIds);

  const handleNewListPress = () => {
    router.push("/list/new");
  };

  const rightHeader = () => (
    <View>
      <Pressable onPress={() => router.push("/list/new")}>
        <IconSymbol name="plus" color={appleBlue} />
      </Pressable>
    </View>
  );

  const leftHeader = () => (
    <View>
      <Pressable onPress={() => router.push("/profile")}>
        <IconSymbol name="gear" color={appleBlue} />
      </Pressable>
    </View>
  );

  const renderEmptyList = () => (
    <BodyScrollView contentContainerStyle={styles.emptyStateContainer}>
      <IconCircle
        emoji="🛒"
        backgroundColor={
          backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
        }
      />
      <Button onPress={handleNewListPress} variant="ghost">
        Create your first list
      </Button>
    </BodyScrollView>
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: "Home",
          headerRight: rightHeader,
          headerLeft: leftHeader,
        }}
      />
      <FlatList
        data={shoppingIds}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: "/list/[listId]", params: { listId: item } }}
            style={{ color: "red" }}
          >
            {item}
          </Link>
        )}
        contentInsetAdjustmentBehavior="automatic"
        ListEmptyComponent={renderEmptyList()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 8,
  },
  emptyStateContainer: {
    alignItems: "center",
    gap: 8,
    paddingTop: 100,
  },
  headerButton: {
    padding: 8,
    paddingRight: 0,
    marginHorizontal: Platform.select({ web: 16, default: 0 }),
  },
  headerButtonLeft: {
    paddingLeft: 0,
  },
});

export default Home;
