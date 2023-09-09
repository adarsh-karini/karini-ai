import Hero from "@/components/services/Hero";
import SectionOne from "@/components/services/SectionOne";
import SectionTwo from "@/components/services/SectionTwo";
import { Inter, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const services = () => {
  return (
    <div className={`${inter.className} bg-white`}>
      <Hero />
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default services;
