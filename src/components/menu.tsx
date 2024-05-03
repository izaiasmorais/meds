"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavItem } from "./nav-item";
import { MenuIcon, Pill, Settings, Star } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export function Menu() {
	const pathname = usePathname();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="flex items-center justify-center">
					<MenuIcon size={20} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem
					className={pathname.endsWith("/") ? "bg-accent md:bg-inherit" : ""}
				>
					<NavItem link="/" name="Medicamentos" icon={<Pill size={20} />} />
				</DropdownMenuItem>

				<DropdownMenuItem
					className={
						pathname.endsWith("/favoritos") ? "bg-accent md:bg-inherit" : ""
					}
				>
					<NavItem
						link="/favoritos"
						name="Favoritos"
						icon={<Star size={20} />}
					/>
				</DropdownMenuItem>

				<DropdownMenuItem
					className={
						pathname.endsWith("/configuracoes") ? "bg-accent md:bg-inherit" : ""
					}
				>
					<NavItem
						link="/configuracoes"
						name="Configurações"
						icon={<Settings size={20} />}
					/>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
