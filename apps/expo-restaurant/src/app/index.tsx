import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/home/SearchBar";

export const Index = () => {
	const [search, setSearch] = useState("");

	return (
		<View className="w-svw h-svh">
			<SearchBar search={search} setSearch={setSearch} />
		</View>
	);
};

export default Index;
