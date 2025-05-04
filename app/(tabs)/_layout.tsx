import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { Text, View } from "react-native";
import { usePathname } from "expo-router";

export default function TabsLayout() {
	const pathname = usePathname();
	const isHomeActive = pathname === "/" || pathname === "/home";
	const isAboutActive = pathname === "/about";

	return (
		<Tabs>
			<TabSlot />

			<TabList
				className="p-4 bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0
			flex gap-0"
			>
				<TabTrigger
					name="home"
					href="/"
					className="cursor-pointer active:bg-slate-50 w-1/2 rounded-xl
					flex !items-center !justify-center"
				>
					<View className="items-center justify-center flex-col">
						<Ionicons
							name={isHomeActive ? "home" : "home-outline"}
							size={24}
							color={"#1e293b"}
						/>
						<Text style={{ color: "#1e293b" }}>Home</Text>
					</View>
				</TabTrigger>

				<TabTrigger
					name="about"
					href="/about"
					className="cursor-pointer active:bg-slate-50 w-1/2 rounded-xl
					flex !items-center !justify-center"
				>
					<View className="items-center justify-center flex-col">
						<Ionicons
							name={
								isAboutActive
									? "information-circle"
									: "information-circle-outline"
							}
							size={26}
							color={"#1e293b"}
						/>
						<Text style={{ color: "#1e293b" }}>Sobre</Text>
					</View>
				</TabTrigger>
			</TabList>
		</Tabs>
	);
}
