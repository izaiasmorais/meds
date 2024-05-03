import Link from "next/link";
import { Menu } from "./menu";
import { MenuBar } from "./nav";

export function Header() {
	return (
		<header className="max-w-[1200px] mx-auto flex items-center justify-between py-6">
			<Link href={"/"} className="text-2xl font-semibold text-muted-foreground">
				Meds
			</Link>

			<div className="hidden md:flex">
				<MenuBar />
			</div>

			<div className="flex md:hidden">
				<Menu />
			</div>
		</header>
	);
}
