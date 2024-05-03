import { MedsList } from "@/components/meds-list";
import { Input } from "@/components/ui/input";

export default function Home() {
	return (
		<>
			<div className="w-full flex flex-wrap items-center justify-between gap-2">
				<h1 className="text-xl font-medium">Medicamentos</h1>

				<Input
					placeholder="Pesquisar Medicamento..."
					className="w-full md:w-[300px]"
				/>
			</div>

			<MedsList />
		</>
	);
}
