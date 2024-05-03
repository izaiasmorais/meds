import { MedsList } from "@/components/meds-list";
import { Menu } from "@/components/menu";
import { MenuBar } from "@/components/nav";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<main className="w-full h-screen bg-[#f1f5f9] px-4">
			<header className="max-w-[1200px] mx-auto flex items-center justify-between py-6">
				<h1 className="text-2xl font-semibold">Meds</h1>

				<div className="hidden md:flex">
					<MenuBar />
				</div>

				<div className="flex md:hidden">
					<Menu />
				</div>
			</header>

			<Separator />

			<div className="max-w-[1200px] mx-auto py-6">
				<div className="w-full flex flex-wrap items-center justify-between gap-2">
					<h1 className="text-xl font-medium">Medicamentos</h1>

					<Input
						placeholder="Pesquisar Medicamento..."
						className="w-full md:w-[300px]"
					/>
				</div>
			</div>

			<div className="max-w-[1200px] mx-auto py-6">
				<MedsList />
			</div>
		</main>
	);
}
