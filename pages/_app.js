import BrevoScript from "@/components/BrevoScript";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<div className="bg-black py-[35px]"></div>
			<BrevoScript />
			<Component {...pageProps} />
			<CTA />
			<Footer />
		</>
	);
}
