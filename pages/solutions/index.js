import Hero from "@/components/solutions/Hero";
import Solutions from "@/components/solutions/Solutions";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

export default function Home() {
  return (
    <div className={`${poppins.variable} ${inter.className} bg-white`}>
      <Hero />
      <Solutions />
    </div>
  );
}
