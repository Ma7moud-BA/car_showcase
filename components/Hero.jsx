"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
const Hero = () => {
	const handleScroll = () => {};
	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">
					Discover the Perfect Ride - Effortlessly and Speedily!
				</h1>
				<p className="hero__subtitle">
					Simplify Your Car Rental - Effortless Booking at Your Fingertips!
				</p>
				<CustomButton
					title="Explore Cars"
					containerStyles="bg-primary-blue text-white rounded-full mt-10 "
					handleClick={handleScroll}
				></CustomButton>
			</div>
			<div className="hero__image-container">
				<div className="hero__image">
					<Image src="/hero.png" alt="hero" fill />
				</div>
				<div className="hero__image-overlay"></div>
			</div>
		</div>
	);
};

export default Hero;
