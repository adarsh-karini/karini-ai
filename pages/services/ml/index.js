import ClientLogos from "@/components/services/ml/ClientLogos";
import Hero from "@/components/services/ml/Hero";
import OurServices from "@/components/services/ml/OurServices";
import SuccessStories from "@/components/services/ml/SuccessStories";
import WhyChooseUs from "@/components/services/ml/WhyChooseUs";
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
