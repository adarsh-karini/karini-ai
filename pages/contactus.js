import ContactForm from "@/components/contactus/ContactForm";
import Hero from "@/components/contactus/Hero";
import { Inter, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const contactus = () => {
  return (
    <div className={`${inter.className} bg-white`}>
      <Hero />
      <ContactForm />
    </div>
  );
};

export default contactus;
