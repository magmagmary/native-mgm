import { Text, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import { Input } from "@native-magmag/ui";

export default function Page() {
	const [name, setName] = useState("");

	return (
		<View className="bg-white w-full h-full flex items-center justify-center">
			<Image source={require("../../assets/icon.png")} className="w-10 h-10 " />
			<Text className="text-primary text-4xl mb-5">Hello {name}</Text>
			<Input
				placeholder="enter your name"
				value={name}
				onChangeText={setName}
				autoCapitalize="none"
				autoCorrect={false}
			/>
		</View>
	);
}
