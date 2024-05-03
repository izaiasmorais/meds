import { Separator } from "@/components/ui/separator";
import { meds } from "@/database/meds";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface MedicamentoProps {
	params: {
		slug: string;
	};
}

export default function Medicamento({ params }: MedicamentoProps) {
	const med = meds.find((med) => med.NOME.toLocaleLowerCase() === params.slug);

	if (!med) {
		return (
			<div className="w-full pt-20 flex justify-center items-center">
				<p>Medicamento não encontrado.</p>
			</div>
		);
	}

	const medArray = Object.entries(med).map(([key, value]) => ({
		key,
		value,
	}));

	return (
		<div>
			<div className="w-full flex items-center gap-4">
				<Link href={"/"}>
					<ArrowLeft size={20} />
				</Link>
				<h1 className="text-2xl font-medium">{med.NOME}</h1>
			</div>

			<div className="w-full pt-4 space-y-4">
				{medArray.map(({ key, value }) => {
					return (
						<>
							<div key={key}>
								<strong className="text-lg tracking-wide">{key}: </strong>
								<br />
								<ul className="list-disc pl-[1.25rem]">
									<li>{value}</li>
								</ul>
							</div>
							<Separator />
						</>
					);
				})}
			</div>
		</div>
	);
}
