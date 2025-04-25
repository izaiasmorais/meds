import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />

			<Stack.Screen
				name="medicine/[id]"
				options={() => ({
					title: "medicine/[id]",
					headerBackTitleVisible: false,
				})}
			/>
		</Stack>
	);
}
