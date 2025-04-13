import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Medicine() {
	const { id } = useLocalSearchParams();

	return (
		<View className="flex-1 items-center justify-center bg-slate-50">
			<Text>Medicine: {id}</Text>
		</View>
	);
}
