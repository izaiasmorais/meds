import { medicines } from "@/mocks/medicines";
import { Link } from "expo-router";
import {
	FlatList,
	TextInput,
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useMemo } from "react";

export default function Index() {
	const [searchQuery, setSearchQuery] = useState("");

	const filteredMedicines = useMemo(() => {
		return medicines.filter((medicine) =>
			medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}, [searchQuery]);

	return (
		<View className="flex-1 bg-white">
			<View className="pt-12 px-4 flex flex-col pb-4">
				<Text className="text-2xl font-medium mb-4">Antibióticos HU</Text>

				<View className="flex-row items-center bg-slate-50 rounded-lg px-3 py-2 mb-4">
					<Ionicons name="search" size={20} color="#999" />
					<TextInput
						placeholder="Nome do medicamento..."
						className="flex-1 ml-2 text-base outline-none"
						value={searchQuery}
						onChangeText={setSearchQuery}
					/>
				</View>

				<Text className="text-gray-500 mb-2">
					Total de medicamentos ({filteredMedicines.length})
				</Text>

				{filteredMedicines.length === 0 && (
					<Text className="text-center text-gray-500 mt-4">
						Nenhum medicamento encontrado
					</Text>
				)}

				{filteredMedicines.length > 0 && (
					<FlatList
						data={filteredMedicines}
						keyExtractor={(item) => item.name}
						className="h-full"
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<Link href={`/medicine/${item.id}`} asChild>
								<TouchableOpacity
									className="flex-row items-center justify-between px-4 rounded-lg py-3
								hover:bg-slate-50/50 transition-all duration-300"
								>
									<Text className="text-base">{item.name}</Text>
									<Ionicons name="chevron-forward" size={16} color="#888" />
								</TouchableOpacity>
							</Link>
						)}
					/>
				)}
			</View>
		</View>
	);
}
