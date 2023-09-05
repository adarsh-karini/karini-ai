import ClientLogos from "@/components/aboutus/ClientLogos";
import FAQ from "@/components/aboutus/FAQ";
import Hero from "@/components/aboutus/Hero";
import Stats from "@/components/aboutus/Stats";
import WhoWe from "@/components/aboutus/WhoWe";
import { Inter, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const aboutus = () => {
  return (
    <div className={inter.className}>
      <Hero />
      <Stats />
      <WhoWe />
      <ClientLogos />
      <FAQ />
    </div>
  );
};

export default aboutus;
