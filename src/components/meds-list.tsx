"use client";
import { meds } from "@/database/meds";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { MedsListPagination } from "./meds-list-pagination";
import Link from "next/link";

export function MedsList() {
	const [page, setPage] = useState(1);
	const itemsPerPage = 10;
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const paginatedMeds = meds.slice(startIndex, endIndex);

	const totalPages = Math.ceil(meds.length / itemsPerPage);

	const nextPage = () => {
		setPage((prevPage) => Math.min(prevPage + 1, totalPages));
	};

	const prevPage = () => {
		setPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const goToPage = (pageNumber: number) => {
		setPage(Math.min(Math.max(pageNumber, 1), totalPages));
	};

	return (
		<div className="grid gap-4">
			<div className="flex flex-col gap-2 w-full">
				{paginatedMeds.map((med, i) => {
					return (
						<Link
							href={`/medicamento/${med.C.toLocaleLowerCase()}`}
							key={i}
							className="flex w-full justify-between items-center px-4 py-2 rounded-md bg-white
					border border-muted-foreground/20 cursor-pointer hover:bg-white/80 transition-colors
					duration-300"
						>
							<p className=" md:text-lg">{med.C}</p>
							<ChevronRight size={20} />
						</Link>
					);
				})}
			</div>

			<MedsListPagination
				goToPage={goToPage}
				nextPage={nextPage}
				prevPage={prevPage}
				totalPages={totalPages}
				page={page}
			/>
		</div>
	);
}
