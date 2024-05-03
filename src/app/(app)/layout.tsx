import { Header } from "@/components/header";
import { Separator } from "@/components/ui/separator";

interface AppLayoutProps {
	children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<main className="w-full h-screen  px-4">
			<Header />

			<Separator />

			<div className="max-w-[1200px] mx-auto py-6 space-y-4">
				{children}
			</div>
		</main>
	);
}
