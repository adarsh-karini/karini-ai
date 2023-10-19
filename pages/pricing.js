import Hero from "@/components/pricing/Hero";
import Pricing from "@/components/pricing/Pricing";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const pricing = () => {
  return (
    <>
      <Head>
        <title>Pricing | Karini AI</title>
      </Head>
      <div className={`${poppins.variable} ${inter.className} bg-white`}>
        <Hero />
        <Pricing />
      </div>
    </>
  );
};

export default pricing;
