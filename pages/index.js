import { Inter, Poppins } from "next/font/google";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import WhyKarini from "@/components/home/WhyKarini";
import OurServices from "@/components/home/OurServices";
import OurPlatforms from "@/components/home/OurPlatforms";
import ClientReviews from "@/components/home/ClientReviews";
import FAQ from "@/components/home/FAQ";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

export default function Home() {
  return (
    <div className={`${poppins.variable} ${inter.className} bg-white`}>
      <Hero />
      <WhyKarini />
      <OurServices />
      <OurPlatforms />
      <ClientReviews />
      <FAQ />
    </div>
  );
}
