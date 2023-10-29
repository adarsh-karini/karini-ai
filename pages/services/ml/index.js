import Challenges from "@/components/services/ml/Challenges";
import CustomerStories from "@/components/services/ml/CustomerStories";
import Hero from "@/components/services/ml/Hero";
import OurServices from "@/components/services/ml/OurServices";
import WhyChooseUs from "@/components/services/ml/WhyChooseUs";
import OurClients from "@/components/services/ml/OurClients";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const ml = () => {
  return (
    <>
      <Head>
        <title>ML Services | Karini AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Data to Insights using Generative AI " />
        <meta name="keywords" content="Computer Vision,CV,NLP,Machine Learning,HuggingFace,MLOPS,SageMaker,VertexAI,Bedrock,Databricks,Dolly" /> 
      </Head>
      <div className={`${poppins.variable} ${inter.className} bg-white`}>
        <Hero />
        <Challenges />
        <OurServices />
        <CustomerStories />
        <OurClients />
      </div>
    </>
  );
};

export default ml;
