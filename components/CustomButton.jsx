"use client";

import React from "react";
import Image from "next/image";
const CustomButton = ({
	title,
	containerStyles,
	handleClick,
	btntype = "button",
	textStyles = "",
	rightIcon = "",
	isDisabeld = false,
}) => {
	return (
		<button
			disabled={false}
			type={btntype}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyles}`}>{title}</span>
			{rightIcon !== "" && (
				<Image src={rightIcon} width={20} height={20} alt="icon"></Image>
			)}
		</button>
	);
};

export default CustomButton;
