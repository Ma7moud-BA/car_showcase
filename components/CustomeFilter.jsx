"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { updateSearchParams } from "@/utils";
const CustomeFilter = ({ title, options }) => {
	const [selected, setSelected] = useState(options[0]);
	const router = useRouter();
	const handleUpdateParams = (e) => {
		const newPathName = updateSearchParams(title, e.value.toLowerCase());
		router.push(newPathName, { scroll: false });
	};
	return (
		<div className="w-fit">
			<Listbox
				value={selected}
				onChange={(e) => {
					setSelected(e);
					handleUpdateParams(e);
				}}
			>
				<div className="relative w-fit z-10">
					<Listbox.Button className="custom-filter__btn">
						<span className="block truncate">{selected.title}</span>
						<Image
							src="/chevron-up-down.svg"
							width={20}
							height={20}
							alt="chevron"
							className="ml-4 object-contain"
						></Image>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition easi-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="custom-filter__options">
							{options.map((option) => {
								return (
									<Listbox.Option
										key={option.title}
										value={option}
										// since this is a headlessui component it allows u to get which one is active by adding a callback function in the className and destructure the active property
										className={({ active }) =>
											`relative cursor-default select-none py-2 px-4 ${
												active ? "bg-primary-blue text-white" : "text-gray-400"
											}`
										}
									>
										{({ selected }) => {
											return (
												<span
													className={`block ${
														selected ? "font-medium" : "font-normal"
													}`}
												>
													{option.title}
												</span>
											);
										}}
									</Listbox.Option>
								);
							})}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};

export default CustomeFilter;
