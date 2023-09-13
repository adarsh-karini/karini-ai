import ClientLogos from "@/components/services/genai/ClientLogos";
import Hero from "@/components/services/genai/Hero";
import OurServices from "@/components/services/genai/OurServices";
import SectionOne from "@/components/services/genai/SectionOne";
import SectionTwo from "@/components/services/genai/SectionTwo";
import SuccessStories from "@/components/services/genai/SuccessStories";
import WhyChooseUs from "@/components/services/genai/WhyChooseUs";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const index = () => {
  return (
    <div className={`${poppins.variable} ${inter.className} bg-white`}>
      <Hero />
      <OurServices />
      <WhyChooseUs />
      <ClientLogos />
      <SuccessStories />
    </div>
  );
};

export default index;
