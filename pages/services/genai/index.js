import Challenges from "@/components/services/genai/Challenges";
import Hero from "@/components/services/genai/Hero";
import OurClients from "@/components/services/genai/OurClients";
import OurServices from "@/components/services/genai/OurServices";
import WhyChooseUs from "@/components/services/genai/WhyChooseUs";
import CustomerStories from "@/components/services/genai/CustomerStories";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const genai = () => {
  return (
    <>
      <Head>
        <title>Gen AI Services | Karini AI</title>
      </Head>
      <div className={`${poppins.variable} ${inter.className} bg-white`}>
        <Hero />
        <Challenges />
        <OurServices />
        {/* <WhyChooseUs /> */}
        <CustomerStories />
        <OurClients />
      </div>
    </>
  );
};

export default genai;
