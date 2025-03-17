import React from "react";
import { View, Text, FlatList } from "react-native";

const sampleData = [
	{ id: 1, name: "John Doe" },
	{ id: 2, name: "Jane Doe" },
	{ id: 3, name: "John Smith" },
	{ id: 4, name: "Jane Smith" },
	{ id: 5, name: "John Johnson" },
	{ id: 6, name: "Jane Johnson" },
];

const List = () => {
	return (
		<View className="w-full h-full bg-white">
			<Text className="text-2xl text-primary mb-5">List</Text>
			<FlatList
				// horizontal
				// showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id.toString()}
				data={sampleData}
				renderItem={({ item }) => <Text>{item.name}</Text>}
			/>
		</View>
	);
};

export default List;
