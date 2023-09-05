import Hero from "@/components/contactus/Hero";
import { Inter, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const contactus = () => {
  return (
    <div className={inter.className}>
      <Hero />
    </div>
  );
};

export default contactus;
