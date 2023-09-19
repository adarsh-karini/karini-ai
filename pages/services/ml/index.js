import Challenges from "@/components/services/ml/Challenges";
import CustomerStories from "@/components/services/ml/CustomerStories";
import Hero from "@/components/services/ml/Hero";
import OurServices from "@/components/services/ml/OurServices";
import WhyChooseUs from "@/components/services/ml/WhyChooseUs";
import OurExpertise from "@/components/services/ml/ourExpertise";
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
      <Challenges />
      <OurServices />
      {/* <WhyChooseUs /> */}
      <OurExpertise />
      <CustomerStories />
    </div>
  );
};

export default index;
