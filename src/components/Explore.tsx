"use client";
import Image from "next/image";
import React, { useState } from "react";
import Gridcard from "./Gridcard";
import { furniture } from "@/data";

const Explore = () => {
	const [data, setData] = useState(furniture);

	function handleChange(value: any) {
		if (value == "All") {
			setData(furniture);
		} else {
			setData(furniture.filter((e) => e.bedrooms == value));
		}
	}
	return (
		<div className=" pt-10 text-primary px-3">
			<div className="max-w-7xl m-auto ">
				<h1 className="font-semibold text-3xl">Explore Homes</h1>
				<div className="flex justify-between mt-6">
					<div className="">
						<input
							type="search"
							className=" text-black text-sm md:w-[416px] w-[150px] sm:w-[300px] border p-3 outline-none border-primary  rounded-lg"
							placeholder="Search"
						/>
					</div>
					<button className="flex bg-ternary py-2 px-4 rounded-xl gap-2">
						<Image
							src={"/filtericon.svg"}
							className="mt-1"
							alt="filtericon"
							height={15}
							width={21}
						/>
						<p className="text-primary">Filters</p>
					</button>
				</div>
				<select
					onChange={(e) => handleChange(e.target.value)}
					name="options"
					id=""
					className="text-black"
				>
					<option value="All">All</option>
					<option value="1">1 Bed Room</option>
					<option value="2">2 Bed Room</option>
					<option value="3">3 Bed Room</option>
					<option value="4">4 Bed Room</option>
					       
				</select>
				<div className="mt-5">
					<h2 className="text-black text-2xl">
						Top Picks For You -<span className="text-primary"> Amsterdam </span>
					</h2>
					<div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 mt-6">
						{data.map((elem: any, index) => (
							<Gridcard elem={elem} key={index} />
						))}
					</div>
					<h2 className="text-black text-2xl md:mt-6 m-auto">
						Members looking to travel to your location -
						<span className="text-primary"> Ljubjana </span>
					</h2>
					<div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
						{data.map((elem: any, index) => (
							<Gridcard elem={elem} key={index} />
						))}
					</div>
					<h2 className="text-black text-2xl my-6">Explore Options</h2>
					<div className="max-w-[1061px] bg-ternary rounded-xl mb-9 md:grid grid-flow-col">
						<div className="md:grid grid-flow-col justify-between p-5 items-center">
							<div className="grid col-span-5 gap-x-8">
								<p className="text-secondary font-medium">
									Where do you want to go
								</p>
								<input
									type="text"
									className=" text-black text-sm    border p-2 mt-1 outline-none border-primary  rounded-lg bg-ternary"
									placeholder="Search destinations"
								/>
							</div>
							<div className="mt-3 md:mt-0 grid col-span-3">
								<p className="font-medium text-secondary ">Selected Dates</p>
								<input
									type="text"
									className="mt-1 text-black text-sm border p-2 outline-none border-primary rounded-lg bg-ternary"
									placeholder="Search destinations"
								/>
							</div>
							<div>
								<button className=" text-white bg-primary px-16 py-2  rounded-md mt-6 col-span-2">
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Explore;
