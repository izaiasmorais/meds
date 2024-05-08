import { Separator } from "@/components/ui/separator";
import { meds } from "@/database/meds";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import slugify from "react-slugify";

interface MedicamentoProps {
	params: {
		slug: string;
	};
}

export default function Medicamento({ params }: MedicamentoProps) {
	const med = meds.find((med) => slugify(med.NOME) === params.slug);

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
					if (
						key !== "RESPONSAVEL" &&
						key !== "revisão 1" &&
						key !== "revisão 2" &&
						key !== "Revisão 03 (extensionistas)"
					) {
						return (
							<>
								<div key={key}>
									<strong className="text-base tracking-wide">{key}: </strong>
									<br />
									<ul className="list-disc pl-[1.25rem]">
										<li>{value}</li>
									</ul>
								</div>
								<Separator />
							</>
						);
					}
				})}
			</div>
		</div>
	);
}
