import { Text, View } from "react-native";

export default function About() {
	return (
		<View className="flex-1 bg-white">
			<View className="pt-12 px-4 pb-4">
				<Text className="text-2xl font-medium mb-4">Sobre</Text>

				<View className="mt-4 space-y-6 bg-slate-50 p-4 rounded-lg">
					<View className="flex flex-col gap-2">
						<Text className="font-medium">Desenvolvedores</Text>
						<Text className="text-slate-500">
							Projeto desenvolvido por estudantes de Ciência da Computação em
							conjunto a estudantes do curso de Enfermagem e Farmácia.
						</Text>
					</View>

					<View className="flex flex-col gap-2">
						<Text className="font-medium">Versão</Text>
						<Text className="text-slate-500">1.4.0</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
