import { NavItem } from "./nav-item";
import { Pill, Settings, Star } from "lucide-react";

export function MenuBar() {
	return (
		<nav className="flex items-center gap-2">
			<NavItem name="Medicamentos" icon={<Pill size={20} />} isActive />
			<NavItem name="Favoritos" icon={<Star size={20} />} isActive={false} />
			<NavItem
				name="Configurações"
				icon={<Settings size={20} />}
				isActive={false}
			/>
		</nav>
	);
}
