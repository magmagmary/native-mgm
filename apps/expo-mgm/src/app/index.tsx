import { Text, View } from "react-native";
import { Image } from "expo-image";

export default function Page() {
	return (
		<View className="bg-white w-full h-full flex items-center justify-center">
			<Image source={require("../../assets/icon.png")} className="w-10 h-10 " />
			<Text className="text-primary text-4xl">Hello there</Text>
		</View>
	);
}
