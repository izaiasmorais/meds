"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
	name: string;
	icon: React.ReactNode;
	link: string;
}

export function NavItem({ name, icon, link }: NavItemProps) {
	const pathname = usePathname();

	const styles = pathname.endsWith(link)
		? "md:bg-white border-muted-foreground/20"
		: "border-transparent";

	return (
		<Link
			href={link}
			className={`flex text-sm md:border items-center gap-2 md:rounded-full py-2 px-3 overflow-hidden
			text-muted-foreground cursor-pointer ${styles}`}
		>
			{icon}
			{name}
		</Link>
	);
}
