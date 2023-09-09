import React from "react";
import { Inter, Poppins } from "next/font/google";
import Hero from "@/components/blogs/Hero";
import Blogs from "@/components/blogs/Blogs";
const inter = Inter({ subsets: ["latin"] });

const index = () => {
  return (
    <div className={`${inter.className} bg-white`}>
      <Hero />
      <Blogs />
    </div>
  );
};

export default index;
