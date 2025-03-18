import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/home/SearchBar";
import { useGetPostsQuery } from "@native-magmag/service";
import Posts from "../components/home/Posts";

export const Index = () => {
	const { data, isLoading } = useGetPostsQuery();
	const [search, setSearch] = useState("");

	console.log(data);

	return (
		<View className="w-svw h-svh">
			<SearchBar search={search} setSearch={setSearch} />
			{isLoading || !data ? <Text>Loading...</Text> : <Posts posts={data} />}
		</View>
	);
};

export default Index;
