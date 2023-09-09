import Image from "next/image";
import { Inter, Poppins, Montserrat } from "next/font/google";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import WhyKarini from "@/components/home/WhyKarini";
import OurSolutions from "@/components/home/OurSolutions";
import HowItWorks from "@/components/home/HowItWorks";
import Clients from "@/components/home/Clients";

const inter = Inter({ subsets: ["latin"] });
const montFont = Montserrat({ subsets: ["cyrillic"] });

export default function Home() {
  return (
    <div className={`${montFont.className} bg-white`}>
      <Hero />
      <WhyKarini />
      <OurSolutions />
      <HowItWorks />
      <Clients />
    </div>
  );
}
