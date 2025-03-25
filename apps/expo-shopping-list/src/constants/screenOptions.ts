import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Platform } from "react-native";

export const screenOptions = Platform.select({
	ios: {
		headerLargeTitle: true,
		headerTransparent: true,
		headerBlurEffect: "systemChromeMaterial",
		headerLargeTitleShadowVisible: false,
		headerShadowVisible: true,
		headerLargeStyle: {
			backgroundColor: "transparent",
		},
	},
}) as NativeStackNavigationOptions;
