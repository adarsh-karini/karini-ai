import Hero from "@/components/platforms/Hero";
import HowItWorks from "@/components/platforms/HowItWorks";
import Platforms from "@/components/platforms/Platforms";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const platforms = () => {
  return (
    <>
      <Head>
        <title>Platforms | Karini AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Data to Insights using Generative AI " />
        <meta name="keywords" content="AWS ML,Databricks,OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,LLM,HuggingFace,LLMOps,Dolly" /> 
      </Head>
      <div className={`${poppins.variable} ${inter.className} bg-white`}>
        <Hero />
        <Platforms />
        <HowItWorks />
      </div>
    </>
  );
};

export default platforms;
