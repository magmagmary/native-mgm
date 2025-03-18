import { Input } from "@native-magmag/ui";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { View } from "react-native";

type Props = {
	search: string;
	setSearch: (s: string) => void;
};

const SearchBar = ({ search, setSearch }: Props) => {
	return (
		<View className="bg-slate-200 rounded-md ps-4 w-full lg:max-w-80 flex flex-row items-center h-12">
			<EvilIcons name="search" size={24} color="black" />
			<Input
				value={search}
				onChangeText={setSearch}
				placeholder="search the name"
			/>
		</View>
	);
};

export default SearchBar;
