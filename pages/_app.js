import BrevoScript from "@/components/BrevoScript";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<div className="h-[100vh] flex flex-col">
			<div className="h-[76px]">
				<Navbar />
			</div>
			<BrevoScript />
			<div className="flex-1 overflow-y-auto">
				<Component {...pageProps} />
				<CTA />
				<Footer />
			</div>
		</div>
	);
}
