import { Link, Stack, Tabs } from "expo-router";
import { Platform, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

import React from "react";
import { primary_color, white } from "@native-magmag/ui";

const isWeb = Platform.OS === "web";

export default function RootLayout() {
	// if (Platform.OS === "web") {
	// 	return (
	// 		<View className="w-svw h-svh flex flex-col">
	// 			<View className="h-12 bg-primary w-full flex flex-row items-center justify-center gap-10 flex-none">
	// 				<Link href="/" className="text-white text-xl">
	// 					Home
	// 				</Link>
	// 				<Link href="/list" className="text-white text-xl">
	// 					List
	// 				</Link>
	// 			</View>
	// 			<Stack
	// 				screenOptions={{
	// 					headerShown: false,
	// 				}}
	// 				screenLayout={({ children }) => (
	// 					<View className="p-10 flex-grow bg-white">{children}</View>
	// 				)}
	// 			>
	// 				<Stack.Screen name="index" options={{ title: "Home" }} />
	// 				<Stack.Screen name="list" options={{ title: "List" }} />
	// 			</Stack>
	// 		</View>
	// 	);
	// }

	return (
		<Tabs
			screenOptions={{
				headerStyle: { backgroundColor: primary_color },
				headerTintColor: white,
				tabBarInactiveTintColor: "darkgray",
				tabBarActiveTintColor: white,
				tabBarPosition: isWeb ? "top" : "bottom",
				tabBarStyle: { backgroundColor: primary_color, cursor: "pointer" },
				headerShown: !isWeb,
			}}
			screenLayout={({ children }) => (
				<View className="w-full h-full p-10 bg-white">{children}</View>
			)}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<AntDesign name="home" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="list"
				options={{
					title: "List",
					tabBarIcon: ({ color }) => (
						<Entypo name="list" size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
