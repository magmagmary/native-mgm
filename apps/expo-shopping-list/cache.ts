import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import type { TokenCache } from "@clerk/clerk-expo";

const createTokenCache = (): TokenCache => {
	return {
		getToken: async (key: string) => {
			try {
				const item = await SecureStore.getItemAsync(key);

				return item;
			} catch (error) {
				console.log("error", error);
			}
		},
		saveToken: async (key: string, token: string) => {
			return await SecureStore.setItemAsync(key, token);
		},
	};
};

export const tokenCache =
	Platform.OS === "web" ? undefined : createTokenCache();
