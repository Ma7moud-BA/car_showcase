"use client";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";
const ShowMore = ({ pageNumber, isNext }) => {
	const router = useRouter();
	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10;
		const newPathname = updateSearchParams("limit", `${newLimit}`);
		router.push(newPathname, { scroll: false });
	};
	return (
		<div className="w-full flex-center gap-5 mt-10">
			{!isNext && (
				<CustomButton
					title="Show More"
					btnType="button"
					containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
				></CustomButton>
			)}
		</div>
	);
};

export default ShowMore;
