import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import WhyKarini from "@/components/home/WhyKarini";
import OurSolutions from "@/components/home/OurSolutions";
import HowItWorks from "@/components/home/HowItWorks";
import Clients from "@/components/home/Clients";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Hero />
      <WhyKarini />
      <OurSolutions />
      <HowItWorks />
      <Clients />
    </div>
  );
}
