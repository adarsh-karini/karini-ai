import OurClients from "@/components/aboutus/OurClients";
import Hero from "@/components/aboutus/Hero";
import OurLeadership from "@/components/aboutus/OurLeadership";
import Stats from "@/components/aboutus/Stats";
import TheProcess from "@/components/aboutus/TheProcess";
import VisionMission from "@/components/aboutus/VisionMission";
import WhoWeAre from "@/components/aboutus/WhoWeAre";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const aboutus = () => {
  return (
    <>
      <Head>
        <title>About us | Karini AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Data to Insights using Generative AI " />
        <meta name="keywords" content="AWS ML,Databricks,OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,LLM,HuggingFace,LLMOps,Dolly" /> 
      </Head>
      <div className={`${poppins.variable} ${inter.className} bg-white`}>
        <Hero />
        {/* <Stats /> */}
        {/* <WhoWeAre /> */}
        <OurLeadership />
        {/* <TheProcess /> */}
        {/* <VisionMission /> */}
        {/* <OurClients /> */}
      </div>
    </>
  );
};

export default aboutus;
