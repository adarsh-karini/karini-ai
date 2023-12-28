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
        <title>MLOps Services: Partnering for Enterprise Excellence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Former Amazon ML builders bring deep expertise in ML, Computer Vision, and NLP. Your partner to establish MLOps seamlessly across the enterprise." />
        <meta name="keywords" content="Computer Vision,CV,NLP,Machine Learning,HuggingFace,MLOPS,SageMaker,VertexAI,Bedrock,Databricks,Dolly" /> 
		
		<meta name="robots" content="index,follow" />

		<link rel="canonical" href="https://www.karini.ai/services/ml" />
		{/* <link rel="amphtml" href="https://www.karini.ai/services/ml/amp"/> */}
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
