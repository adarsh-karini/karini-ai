import { Inter, Poppins } from "next/font/google";
import Hero from "@/components/home/Hero";
import OurClients from "@/components/home/OurClients";
import WhyKarini from "@/components/home/WhyKarini";
import OurServices from "@/components/home/OurServices";
import OurPlatforms from "@/components/home/OurPlatforms";
import ClientReviews from "@/components/home/ClientReviews";
import FAQ from "@/components/home/FAQ";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const index = () => {
  return (
    <>
      <Head>
        <title>Home | Karini AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Data to Insights using Generative AI " />
        <meta name="keywords" content="OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,Azure OpenAI,LLM,HuggingFace,LLMOps,Databricks,Dolly" />  
      </Head>
      <div className={`${poppins.variable} ${inter.className} bg-white`}>
        <Hero />
        <OurClients />
        <WhyKarini />
        <OurPlatforms />
        <OurServices />
        {/* <ClientReviews /> */}
        {/* <FAQ /> */}
      </div>
    </>
  );
};

export default index;
