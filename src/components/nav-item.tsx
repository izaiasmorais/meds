import Link from "next/link";

interface NavItemProps {
	name: string;
	icon: React.ReactNode;
	isActive: boolean;
	link: string;
}

export function NavItem({ name, icon, isActive, link }: NavItemProps) {
	const styles = isActive ? "bg-white border border-muted-foreground/20" : "";

	return (
		<Link
			href={link}
			className={`flex text-sm items-center gap-2 rounded-full py-2 px-3 overflow-hidden
			text-muted-foreground cursor-pointer ${styles}`}
		>
			{icon}
			{name}
		</Link>
	);
}
