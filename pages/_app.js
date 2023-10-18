import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="py-10"></div>
      <Component {...pageProps} />
      <CTA />
      <Footer />
    </>
  );
}
