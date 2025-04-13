import React from "react";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { usePathname } from "expo-router";

export default function TabsLayout() {
	const pathname = usePathname();
	const isHomeActive = pathname === "/" || pathname === "/home";
	const isFavoritesActive = pathname === "/favorites";

	return (
		<Tabs>
			<TabSlot />
			<TabList
				className="p-4 bg-white border-t border-gray-200 flex items-center
			justify-around"
			>
				<TabTrigger
					name="home"
					href="/"
					className="flex w-1/2 items-center flex-col"
				>
					<Ionicons
						name={isHomeActive ? "home" : "home-outline"}
						size={24}
						color={"#1e293b"}
					/>
					<Text style={{ color: "#1e293b" }}>Home</Text>
				</TabTrigger>

				<TabTrigger
					name="favorites"
					href="/favorites"
					className="flex w-1/2 items-center flex-col"
				>
					<Ionicons
						name={isFavoritesActive ? "star" : "star-outline"}
						size={24}
						color={"#1e293b"}
					/>
					<Text style={{ color: "#1e293b" }}>Favoritos</Text>
				</TabTrigger>
			</TabList>
		</Tabs>
	);
}
