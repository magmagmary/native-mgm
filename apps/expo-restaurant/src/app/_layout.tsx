import { Stack, Tabs } from "expo-router";
import { Platform, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import React from "react";
import { primary_color, white } from "@native-magmag/ui";
import { Provider } from "react-redux";
import { store } from "@native-magmag/service";

export default function RootLayout() {
	return (
		<Provider store={store}>
			<Stack screenOptions={{ headerShown: false }}>
				{/* Wrap Tabs inside a Stack.Screen */}
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				{/* Add the modal screen */}
				<Stack.Screen
					name="post/[id]"
					options={{
						presentation: "transparentModal", // This makes the screen appear as a modal
						headerShown: true, // Optional: hide the header for a cleaner modal look
						headerTitle: "Post Details",
						headerStyle: {
							backgroundColor: primary_color,
						},
						headerTitleStyle: {
							color: white,
						},
						animation: Platform.select({
							web: "none",
							default: "slide_from_bottom",
						}),
						contentStyle: {
							backgroundColor: "transparent",
						},
					}}
				/>
			</Stack>
			<StatusBar style="auto" />
		</Provider>
	);
}
