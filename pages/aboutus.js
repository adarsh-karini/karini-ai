import OurClients from "@/components/aboutus/OurClients";
import Hero from "@/components/aboutus/Hero";
import OurLeadership from "@/components/aboutus/OurLeadership";
import Stats from "@/components/aboutus/Stats";
import TheProcess from "@/components/aboutus/TheProcess";
import VisionMission from "@/components/aboutus/VisionMission";
import WhoWeAre from "@/components/aboutus/WhoWeAre";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const aboutus = () => {
  return (
    <div className={`${poppins.variable} ${inter.className} bg-white`}>
      <Hero />
      {/* <Stats /> */}
      {/* <WhoWeAre /> */}
      <OurLeadership />
      {/* <TheProcess /> */}
      <VisionMission />
      {/* <OurClients /> */}
    </div>
  );
};

export default aboutus;
