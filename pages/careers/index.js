import React from "react";
import { Inter, Poppins } from "next/font/google";
import Hero from "@/components/careers/Hero";
import Careers from "@/components/careers/Careers";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const careers = () => {
  return (
    <div className={`${poppins.variable} ${inter.className} bg-white`}>
      <Hero />
      <Careers />
    </div>
  );
};

export default careers;
