import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../../components/home/SearchBar";
import { useGetPostsQuery } from "@native-magmag/service";
import Posts from "../../components/home/Posts";
import { useDebounceValue } from "usehooks-ts";

export const Index = () => {
	const { data, isLoading } = useGetPostsQuery();
	const [search, setSearch] = useState("");
	const [debouncedSearchValue] = useDebounceValue(search, 500);

	const filteredData = data?.filter((post) =>
		post.title.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
	);

	return (
		<View className="w-svw h-svh">
			<SearchBar search={search} setSearch={setSearch} />
			{isLoading || !filteredData ? (
				<Text>Loading...</Text>
			) : (
				<Posts posts={filteredData} />
			)}
		</View>
	);
};

export default Index;
