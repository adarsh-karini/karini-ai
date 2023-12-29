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
        <title>Generative AI Services: Your Partner in Innovation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Legitimate your initiative with AI Builders. Keep up with the latest in generative AI trends. Our platform, guided by domain experts, rapidly transforms ideas into products." />
        <meta name="keywords" content="OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,Azure OpenAI,LLM,HuggingFace,LLMOps,Databricks,Dolly" /> 
		
		<meta name="robots" content="index,follow" />

		<link rel="canonical" href="https://www.karini.ai/services/genai" />

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
