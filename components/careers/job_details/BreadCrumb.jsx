import Link from "next/link";
import React from "react";
import { BiSolidHome } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";

const BreadCrumb = ({ title }) => {
  return (
    <div className="bg-white flex items-center px-4 md:px-8 py-6 border-b border-secondary-300">
      <div className="flex items-center space-x-2 text-sm">
        <BiSolidHome size={20} className="text-primary-600" />
        <Link href={"/careers"}>
          <span className="text-primary-600 text-sm font-medium cursor-pointer">
            Careers
          </span>
        </Link>
        <FaAngleRight size={25} className="text-primary-600" />
        <span className="text-primary-600 text-sm font-medium">{title}</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
