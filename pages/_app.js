import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
	const pathname = usePathname();
	console.log("pathname", pathname);
	let path = pathname.split("/")[1];
	console.log("path", path);
	return (
		<>
			<Navbar />
			<div className="py-8"></div>
			<Component {...pageProps} />
			{path !== "aboutus" && path !== "blogs" && path != "contactus" && <CTA />}
			<Footer />
		</>
	);
}
