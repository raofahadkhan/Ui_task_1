import Image from "next/image";
import React from "react";
// import logo from "@/assets/logo.png";

const Header = () => {
	return (
		<div className="bg-primary py-5 px-3  text-white sticky top-0">
			<div className="flex max-w-7xl m-auto   justify-between ">
				<div className="flex gap-x-[10px]">
					<div className="">
						<Image src={"/logo.png"} alt="logo" width={54} height={31} />
					</div>
					<ul className="md:flex hidden ml-[30px] gap-x-[30px]">
						<li>Explore</li>
						<li>My trips</li>
						<li>Chat</li>
					</ul>
				</div>

				<div className="">
					<ul className="md:flex hidden gap-x-[30px]">
						<li>My home</li>
						<li>My Account</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;



