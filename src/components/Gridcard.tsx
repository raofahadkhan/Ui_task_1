import React from "react";
import Image from "next/image";

interface furnitureType {
	id: number;
	image: string;
	location: string;
	title: string;
	description: string;
	bedrooms: number;
	workstations: number;
	bathrooms: number;
}

const Gridcard = ({ elem }: { elem: furnitureType }) => {
	return (
		<>
			<div className="rounded-xl bg-ternary ">
				<Image
					src={elem.image}
					className="rounded-t-md"
					alt="cardimg"
					height={215}
					width={382}
				/>
				<div className="p-3 rounded-b-md">
					<h3 className="text-xs">{elem.location}</h3>
					<h1 className="text-lg text-secondary font-semibold">{elem.title}</h1>
					<h2 className="text-base">{elem.description}</h2>
					<div className="flex ">
						<div className="flex mr-3 gap-1">
							<Image
								src={"/bedroom.svg"}
								alt="bedroom"
								height={20}
								width={20}
							/>
							<p className="font-semibold">{elem.bedrooms}</p>
						</div>

						<div className="flex mr-3 gap-1">
							<Image
								src={"/workstation.svg"}
								alt="workstation"
								height={20}
								width={20}
							/>
							<p className="font-semibold">{elem.workstations}</p>
						</div>

						<div className="flex gap-1">
							<Image
								src={"/bathroom.svg"}
								alt="bathroom"
								height={20}
								width={20}
							/>
							<p className="font-semibold">{elem.bathrooms}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Gridcard;
