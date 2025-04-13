import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Link href="/medicine/1">Paracetamol</Link>
			<Link href="/medicine/2">Ibuprofeno</Link>
			<Link href="/medicine/3">Aspirina</Link>
		</View>
	);
}
