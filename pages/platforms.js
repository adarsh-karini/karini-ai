import Hero from "@/components/platforms/Hero";
import HowItWorks from "@/components/platforms/HowItWorks";
import Platforms from "@/components/platforms/Platforms";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const platforms = () => {
  return (
    <div className={`${poppins.variable} ${inter.className} bg-white`}>
      <Hero />
      <Platforms />
      <HowItWorks />
    </div>
  );
};

export default platforms;
