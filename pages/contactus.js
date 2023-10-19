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
