import { medicines } from "@/mocks/medicines";
import { Link, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Medicine() {
	const { id } = useLocalSearchParams();

	const medicine = medicines.find((medicine) => medicine.id === id);

	if (!medicine) {
		return (
			<View className="flex-1 flex justify-center items-center bg-slate-50">
				<View>
					<Text>Nenhum medicamento encontrado</Text>
				</View>
			</View>
		);
	}

	return (
		<ScrollView className="flex-1 flex p-0">
			<View className="bg-white p-6 flex flex-row items-center">
				<Link href={"/"} className="w-10">
					<Ionicons name="arrow-back" size={20} color="#1e293b" />
				</Link>
				<Text className="text-slate-800 text-xl">{medicine.name}</Text>
			</View>

			<View className="w-full bg-zinc-100 flex-1 flex p-6">
				<View className="w-full bg-white rounded-lg flex flex-col gap-6 p-6">
					<View>
						<Text className="font-semibold">Nome</Text>
						<Text className="text-slate-600">
							• {medicine.name === "-" ? "Não definido" : medicine.name}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Indicação</Text>
						<Text className="text-slate-600">
							•{" "}
							{medicine.indication === "-"
								? "Não definido"
								: medicine.indication}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Diluição</Text>
						<Text className="text-slate-600">
							• {medicine.dilution === "-" ? "Não definido" : medicine.dilution}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Apresentação</Text>
						<Text className="text-slate-600">
							•{" "}
							{medicine.presentation === "-"
								? "Não definido"
								: medicine.presentation}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Dose</Text>
						<Text className="text-slate-600">
							• {medicine.dose === "-" ? "Não definido" : medicine.dose}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Função Renal</Text>
						<Text className="text-slate-600">
							•{" "}
							{medicine.renalFunction === "-"
								? "Não definido"
								: medicine.renalFunction}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Via</Text>
						<Text className="text-slate-600">
							• {medicine.via === "-" ? "Não definido" : medicine.via}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Classe</Text>
						<Text className="text-slate-600">
							• {medicine.class === "-" ? "Não definido" : medicine.class}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Mecanismo de Ação</Text>
						<Text className="text-slate-600">
							•{" "}
							{medicine.actionMecanism === "-"
								? "Não definido"
								: medicine.actionMecanism}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Locais de Ação</Text>
						<Text className="text-slate-600">
							•{" "}
							{medicine.actionPlaces === "-"
								? "Não definido"
								: medicine.actionPlaces}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Solubilidade</Text>
						<Text className="text-slate-600">
							•{" "}
							{medicine.solubility === "-"
								? "Não definido"
								: medicine.solubility}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Biodisponibilidade Oral</Text>
						<Text className="text-slate-600">
							•{" "}
							{medicine.oralBioavailability === "-"
								? "Não definido"
								: medicine.oralBioavailability}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">PK/PD</Text>
						<Text className="text-slate-600">
							• {medicine.pkPd === "-" ? "Não definido" : medicine.pkPd}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">MIC/CBM</Text>
						<Text className="text-slate-600">
							• {medicine.micCbm === "-" ? "Não definido" : medicine.micCbm}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Volume de Distribuição</Text>
						<Text className="text-slate-600">
							• {medicine.vol === "-" ? "Não definido" : medicine.vol}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Ligação Proteica</Text>
						<Text className="text-slate-600">
							• {medicine.lig === "-" ? "Não definido" : medicine.lig}
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Espectro de Ação</Text>
						<Text className="text-slate-600">
							•{" "}
							{medicine.actionSpectrum === "-"
								? "Não definido"
								: medicine.actionSpectrum}
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
