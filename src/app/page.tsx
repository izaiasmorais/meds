import { MedsList } from "@/components/meds-list";
import { MenuBar } from "@/components/nav";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<main className="w-full h-screen bg-[#f1f5f9] px-4">
			<header className="max-w-[1200px] mx-auto flex items-center justify-between py-6">
				<h1 className="text-2xl font-medium">Meds</h1>

				<MenuBar />
			</header>

			<Separator />

			<div className="max-w-[1200px] mx-auto py-6">
				<div className="w-full flex items-center justify-between">
					<h1 className="text-2xl font-medium">Medicamentos</h1>

					<Input placeholder="Pesquisar Medicamento..." className="w-[300px]" />
				</div>
			</div>

			<div className="max-w-[1200px] mx-auto py-6">
				<MedsList />
			</div>
		</main>
	);
}
