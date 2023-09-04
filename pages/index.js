import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import WhyKarini from "@/components/home/WhyKarini";
import OurSolutions from "@/components/home/OurSolutions";
import HowItWorks from "@/components/home/HowItWorks";
import Clients from "@/components/home/Clients";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyKarini />
      <OurSolutions />
      <HowItWorks />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}
