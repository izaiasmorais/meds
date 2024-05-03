import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

interface MedsListPaginationProps {
	nextPage: () => void;
	prevPage: () => void;
	goToPage: (pageNumber: number) => void;
	totalPages: number;
	page: number;
}

export function MedsListPagination({
	goToPage,
	nextPage,
	prevPage,
	totalPages,
	page,
}: MedsListPaginationProps) {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href="#"
						onClick={() => prevPage()}
						className="bg-white hover:bg-white/80 border border-muted-foreground/20
						hidden md:flex"
					/>
				</PaginationItem>

				{Array.from({ length: totalPages }).map((_, index) => {
					return (
						<PaginationItem>
							<PaginationLink
								isActive={index + 1 === page}
								href="#"
								onClick={() => goToPage(index + 1)}
							>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					);
				})}

				<PaginationItem>
					<PaginationNext
						href="#"
						onClick={() => nextPage()}
						className="bg-white hover:bg-white/80 border border-muted-foreground/20
						hidden md:flex"
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
