import { primary_color, white } from "@native-magmag/ui";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const isWeb = Platform.OS === "web";

const TabsLayout = () => {
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
		</Tabs>
	);
};

export default TabsLayout;
