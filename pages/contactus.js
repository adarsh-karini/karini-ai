import ContactForm from "@/components/contactus/ContactForm";
import Hero from "@/components/contactus/Hero";
import OurOffices from "@/components/contactus/OurOffices";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

const contactus = () => {
  return (
    <>
      <Head>
        <title>Contact us | Karini AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Data to Insights using Generative AI" />
        <meta name="keywords" content="AWS ML,Databricks,OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,LLM,HuggingFace,LLMOps,Dolly" /> 
      </Head>
      <div className={`${inter.className} bg-white`}>
        <Hero />
        <ContactForm />
        {/* <OurOffices /> */}
      </div>
    </>
  );
};

export default contactus;
