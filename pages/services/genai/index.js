import Challenges from "@/components/services/genai/Challenges";
import Hero from "@/components/services/genai/Hero";
import OurExpertise from "@/components/services/genai/OurExpertise";
import OurServices from "@/components/services/genai/OurServices";
import WhyChooseUs from "@/components/services/genai/WhyChooseUs";
import CustomerStories from "@/components/services/genai/CustomerStories";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const genai = () => {
  return (
    <div className={`${poppins.variable} ${inter.className} bg-white`}>
      <Hero />
      <Challenges />
      <OurServices />
      {/* <WhyChooseUs /> */}
      <OurExpertise />
      <CustomerStories />
    </div>
  );
};

export default genai;
