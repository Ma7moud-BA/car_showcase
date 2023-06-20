"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { SearchManufacturer } from "./";
import Image from "next/image";
const SearchButton = ({ otherClasses }) => {
	return (
		<button type="submit" className={`ml-3 z-10 ${otherClasses}`}>
			<Image
				src="/magnifying-glass.svg"
				alt="magnifyingglass"
				width={40}
				height={40}
				className="object-contain"
			></Image>
		</button>
	);
};
const SearchBar = () => {
	const router = useRouter();

	const [manufacturer, setManufacturer] = useState("");
	const [model, setModel] = useState("");
	const handleSearch = (e) => {
		//we dont have to make another api call for the search in next js, just change the url parameter then next js will make a server side call for us and get the data
		// but you have to make the fetch call in the main page depends on the search params
		e.preventDefault();
		if (manufacturer === "" && model === "")
			return alert("please fill the search bar");
		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
	};
	const updateSearchParams = (model, manufacturer) => {
		// this  represents the query string portion of the current URL.
		const searchParams = new URLSearchParams(window.location.search);

		if (manufacturer) {
			searchParams.set("manufacturer", manufacturer);
		} else {
			searchParams.delete("manufacturer");
		}
		if (model) {
			searchParams.set("model", model);
		} else {
			searchParams.delete("model");
		}
		const newPathname = `${
			window.location.pathname
		}?${searchParams.toString()}`;
		router.push(newPathname);
	};

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherClasses="sm:hidden"></SearchButton>
			</div>
			<div className="searchbar__item">
				<Image
					src="/model-icon.png"
					width={25}
					height={25}
					className="absolute w-[20px] h-[20px] ml-4  "
					alt="car model"
				></Image>
				<input
					type="text"
					placeholder="BMW"
					className="searchbar__input"
					name="model"
					value={model}
					onChange={(e) => {
						setModel(e.target.value);
					}}
				/>
				<SearchButton otherClasses="sm:hidden"></SearchButton>
			</div>
			<SearchButton otherClasses="max-sm:hidden"></SearchButton>
		</form>
	);
};

export default SearchBar;
