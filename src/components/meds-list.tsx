"use client";
import { meds } from "@/database/meds";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { MedsListPagination } from "./meds-list-pagination";

export function MedsList() {
	const [page, setPage] = useState(1);

	const paginatedMeds = meds.slice(0, 10);

	return (
		<div className="grid gap-4">
			<div className="flex flex-col gap-2 w-full">
				{paginatedMeds.map((med) => {
					return (
						<div
							className="flex w-full justify-between items-center px-4 py-2 rounded-md bg-white
					border border-muted-foreground/20 cursor-pointer hover:bg-white/80 transition-colors
					duration-300"
						>
							<p className="text-lg">{med.C}</p>
							<ChevronRight size={20} />
						</div>
					);
				})}
			</div>

			<MedsListPagination />
		</div>
	);
}
