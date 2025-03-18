import type { Post } from "@native-magmag/service";
import React from "react";
import { FlatList, View, Text, Platform } from "react-native";

const Posts = ({ posts }: { posts: Post[] }) => {
	return (
		<FlatList
			keyExtractor={(item) => item.id.toString()}
			numColumns={Platform.OS === "web" ? 8 : 3}
			columnWrapperStyle={{ gap: 10 }}
			data={posts}
			renderItem={({ item }) => (
				<View className="size-32 bg-slate-200 p-4 rounded-md  mb-4">
					<Text className="line-clamp-4">{item.title}</Text>
				</View>
			)}
			contentContainerStyle={{ paddingVertical: 20 }}
			showsVerticalScrollIndicator={false}
		/>
	);
};

export default Posts;
