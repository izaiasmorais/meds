import { NavItem } from "./nav-item";
import { Pill, Settings, Star } from "lucide-react";

export function MenuBar() {
	return (
		<nav className="flex items-center gap-2">
			<NavItem link="/" name="Medicamentos" icon={<Pill size={20} />} />
			<NavItem link="/favoritos" name="Favoritos" icon={<Star size={20} />} />
			<NavItem
				link="/configuracoes"
				name="Configurações"
				icon={<Settings size={20} />}
			/>
		</nav>
	);
}
