import Link from "next/link";
import React from "react";
import { BiSolidHome } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoChevronForwardOutline } from "react-icons/io5";
import { CgArrowLeft } from "react-icons/cg";

const BreadCrumb = ({ title }) => {
	return (
		<div className="z-10 fixed w-full bg-white flex items-center px-4 md:px-8 py-3 border-b border-secondary-300">
			<div className="flex items-center space-x-2 text-sm">
				<CgArrowLeft size={20} className="text-primary-600" />
				<Link href={"/blogs"}>
					<span className="text-primary-600 text-sm whitespace-nowrap font-medium cursor-pointer hover:underline">
						Go back
					</span>
				</Link>
				<IoChevronForwardOutline size={18} className="text-black" />
				<span className="text-secondary-900 text-sm">{title}</span>
			</div>
		</div>
	);
};

export default BreadCrumb;
