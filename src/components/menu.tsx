import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavItem } from "./nav-item";
import { MenuIcon, Pill, Settings, Star } from "lucide-react";
import { Button } from "./ui/button";

export function Menu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="flex items-center justify-center">
					<MenuIcon size={20} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<NavItem
						link="/"
						name="Medicamentos"
						icon={<Pill size={20} />}
						isActive
					/>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<NavItem
						link="/favoritos"
						name="Favoritos"
						icon={<Star size={20} />}
						isActive={false}
					/>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<NavItem
						link="/configuracoes"
						name="Configurações"
						icon={<Settings size={20} />}
						isActive={false}
					/>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
