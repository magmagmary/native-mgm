/* eslint-disable jsx-a11y/accessible-emoji */
import { Button } from "@native-magmag/ui";
import React, { useRef } from "react";
import { SafeAreaView, ScrollView, View, Text, StatusBar } from "react-native";
import List from "./components/List";

export const App = () => {
	const scrollViewRef = useRef<null | ScrollView>(null);

	return (
		<SafeAreaView>
			<View className="p-10 w-svw">
				<Text className="text-red-500 text-4xl text-center pb-5 mb-5 border-b border-b-1 border-b-red-500">
					Hello there
				</Text>
				<List />
			</View>
		</SafeAreaView>
	);
};

export default App;
