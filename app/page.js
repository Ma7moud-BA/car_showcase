import Image from "next/image";
import { Hero, SearchBar, CustomeFilter, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { CarCard } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
export default async function Home({ searchParams }) {
	// ? in next js you can extract the search params from any page

	//!big note:: there is a bug in next js where when you change the search params the scroll position i reset to the top of the page
	// !to fix this change this page to client render and make the appropriate changes'

	const allCars = await fetchCars({
		manufacturer: searchParams.manufacturer || "",
		model: searchParams.model || "",
		fuel: searchParams.fuel || "",
		limit: searchParams.limit || 10,
		year: searchParams.year || 2022,
	});
	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 padding-x padding-y" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold"> Car Catalogue</h1>
					<p> Explore the cars you might like</p>
					<div className="home__filters">
						<SearchBar />
						<div className="home__filter-container">
							<CustomeFilter title="fuel" options={fuels} />
							<CustomeFilter title="year" options={yearsOfProduction} />
						</div>
					</div>
				</div>
				{!isDataEmpty ? (
					<section>
						<div className="home__cars-wrapper">
							{allCars?.map((car, index) => {
								return <CarCard key={index} car={car}></CarCard>;
							})}
						</div>
						<ShowMore
							// devide by 10 because we are showing 10 cars per page
							pageNumber={(searchParams.limit || 10) / 10}
							//does the next page exist
							isNext={(searchParams.limit || 10) > allCars.length}
						/>
					</section>
				) : (
					<div className="home_error-container">
						<h2 className="text-black text-xl font bold">Oops, no results</h2>
						<p> {allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}
