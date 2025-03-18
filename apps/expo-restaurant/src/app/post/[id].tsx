import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React from "react";
import { View, Text, Button } from "react-native";

const PostModal = () => {
	const { id } = useLocalSearchParams(); // Get the postId from the URL params
	const router = useRouter();

	return (
		<View className="bg-green-200 h-full w-full p-4 flex items-center justify-center">
			<Text>{id}</Text>
			<Button title="Close" onPress={() => router.back()} />
		</View>
	);
};

export default PostModal;
