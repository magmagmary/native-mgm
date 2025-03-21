import { useFonts } from "expo-font";

export const useAppFont = () => {
	const result = useFonts({
		app: require("libs/utils/src/assets/fonts/OpenSans.ttf"),
	});

	return result;
};
