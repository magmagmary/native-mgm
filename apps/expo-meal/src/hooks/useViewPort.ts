import { useWindowDimensions } from "react-native";

const useViewPort = () => {
	const { width } = useWindowDimensions();

	if (width < 756) return "mobile";
	if (width < 1024) return "tablet";
	return "desktop";
};

export default useViewPort;
