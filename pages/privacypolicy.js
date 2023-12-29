import Hero from "@/components/pricing/Hero";
import Pricing from "@/components/pricing/Pricing";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const privacypolicy = () => {
	return (
		<>
			<Head>
				<title>Privacy Policy | Karini AI</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Data to Insights using Generative AI "
				/>
				<meta
					name="keywords"
					content="AWS ML,Databricks,OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,LLM,HuggingFace,LLMOps,Dolly"
				/>
			</Head>
			<div className={`${poppins.variable} ${inter.className} bg-white`}>
				<div className="max-w-screen-xl mx-auto space-y-4 py-10 px-4 lg:px-0">
					<h1 className="text-primary-600 text-center text-2xl lg:text-4xl font-bold">
						Privacy Policy
					</h1>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">Introduction</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							Karini AI LLC is committed to protecting your privacy. This
							privacy statement explains data collection and use practices of
							the KARINI AI LLC site ({" "}
							<a className="text-primary-600" href="https://www.karini.ai/">
								https://www.karini.ai/
							</a>{" "}
							); it does not apply to other online or offline Karini AI LLC
							sites, products or services. By accessing the Site, you are
							consenting to the information collection and use practices
							described in this privacy statement. Publish. post. upload.
							distribute or disseminate any inappropriate. profane. defamatory.
							infringing. obscene. indecent or unlawful topic. name. material or
							information. Related services and offerings with links from this
							web site, including partner sites, have their own privacy
							statements which can be viewed by clicking on the corresponding
							links within each respective web site.
						</p>
					</div>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">
							Collection of Personal Information
						</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							We will explicitly ask you when we need information that
							personally identifies you (personal information) or allows us to
							contact you to provide a service or carry out a transaction that
							you have requested such as receiving information about Karini AI
							LLC products and services, ordering e-mail newsletters, joining a
							limited-access site or service, signing up for an event or
							training, or when downloading and/or registering Karini AI LLC
							products. The personal information we collect may include your
							name, title, company or organization name, work e-mail, work
							phone, work or home address, information about your job function,
							and information about your company. The Site may collect certain
							information about your visit, such as the name of the Internet
							service provider and the Internet Protocol (IP) address through
							which you access the Internet; the date and time you access the
							Site; the pages that you access while at the Site and the Internet
							address of the Web site from which you linked directly to our
							site. This information is used to help improve the site, analyze
							trends and administer the site. Our sites may at times also
							collect information about your hardware and software in order to
							provide a requested service.
						</p>
					</div>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">
							Use of Personal Information
						</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							The personal information collected on this Site will be used to
							operate the Site and to provide the service(s) or carry out the
							transaction(s) you have requested or authorized. In support of
							these uses, Karini AI LLC may use personal information to provide
							you with more effective customer service, to improve the Site and
							any related Karini AI LLC products or services, and to make the
							Site easier to use by eliminating the need for you to repeatedly
							enter the same information or by customizing the Site to your
							particular preference or interests. In order to offer you a more
							consistent experience in your interactions with Karini AI LLC,
							information collected by Karini AI LLC may be combined with
							information collected by other Karini AI LLC services. We may use
							your personal information to provide you with important
							information about the product or service that you are using,
							including critical updates and notifications. Additionally, with
							your permission, we may send you information about other Karini AI
							LLC products and services, and/or share information with Karini AI
							LLC partners so they may send you information about their products
							and services. Karini AI LLC occasionally hires other companies to
							provide limited services on our behalf, such as Web site hosting,
							answering customer questions about products and services, and
							sending information about our products, special offers, and other
							services. We will only provide those companies the personal
							information they need to deliver the service. They are required to
							maintain the confidentiality of the information and are prohibited
							from using that information for any other purpose. Karini AI LLC
							may disclose personal information if required to do so by law or
							in the good faith belief that such action is necessary to: (a.) –
							Conform to the edicts of the law or comply with legal process
							served on Karini AI LLC or the Site; (b.) – Protect and defend the
							rights or property of Karini AI LLC and our family of Web sites;
							or (c.) – Act in urgent circumstances to protect the personal
							safety of Karini AI LLC employees or agents, users of Karini AI
							LLC products or services, or members of the public. Personal
							information collected on the Site may be stored and processed in
							the United States or any other country in which Karini AI LLC or
							its affiliates, subsidiaries or agents maintain facilities, and by
							using the Site, you consent to any such transfer of information
							outside of your country.
						</p>
					</div>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">
							Access to Personal Information
						</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							You can access and review your personal information by contacting
							KARINI AI LLC as described at the bottom of this statement, or
							through alternative means of access described by the service.
						</p>
					</div>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">
							Security of Personal Information
						</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							Karini AI LLC is committed to protecting the security of your
							personal information. We use a variety of security technologies
							and procedures to help protect your personal information from
							unauthorized access, use, or disclosure. Additionally, when we
							transmit any sensitive personal information (such as a credit card
							number) over the Internet, we protect it through the use of
							encryption, such as the Secure Socket Layer (SSL) protocol.
						</p>
					</div>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">
							Protection of Children’s Personal Information
						</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							KARINI AI LLC is a general audience site and does not knowingly
							collect any personal information from children.
						</p>
					</div>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">Use of Cookies</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							We use may use cookies on this Site to personalize user
							experiences. A cookie is a small text file that is placed on your
							hard disk by a Web page server. Cookies cannot be used to run
							programs or deliver viruses to your computer. Cookies are uniquely
							assigned to you, and can only be read by a Web server in the
							domain that issued the cookie to you. One of the primary purposes
							of cookies is to provide a convenience feature to save you time.
							For example, if you personalize a web page, or navigate within a
							site, a cookie helps the site to recall your specific information
							on subsequent visits. This simplifies the process of delivering
							relevant content, eases site navigation, and so on. When you
							return to the Web site, the information you previously provided
							can be retrieved, so you can easily use the site’s features that
							you customized. We may occasionally opt to share aggregated site
							statistics with partner companies, but do not allow other
							companies to place cookies on our sites unless there is a
							temporary, overriding customer value (such as merging into Karini
							AI LLC .coma site that relies on third-party cookies). You have
							the ability to accept or decline cookies. Most Web browsers
							automatically accept cookies, but you can usually modify your
							browser setting to decline cookies if you prefer. If you choose to
							decline cookies, you may not be able to fully experience the
							interactive features of this or other Web sites you visit.
						</p>
					</div>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">
							Use of Web Beacons
						</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							KARINI AI LLC Web pages may contain electronic images known as Web
							beacons – sometimes also called single-pixel gifs – that allow
							KARINI AI LLC to count users who have visited those pages and to
							deliver co-branded services. KARINI AI LLC may include Web beacons
							in promotional e-mail messages or newsletters in order to
							determine whether messages have been opened and acted upon. Some
							of these Web beacons may be placed by third party service
							providers to help determine the effectiveness of our advertising
							campaigns or email communications. These Web beacons may be used
							by these service providers to place a persistent cookie on your
							computer. Doing this allows the service provider to recognize your
							computer each time you visit certain pages or emails and compile
							anonymous information in relation to those page views. Karini AI
							LLC prohibits Web beacons from being used to collect or access
							your personal information.
						</p>
					</div>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">
							Use of Client Login Features
						</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							The Client Login portion of this Site uses unique user information
							to identify and provide secure sign-in for certain users. In order
							to sign in to this portion if the Site, authorized users will be
							asked to type the login name and password provided to them by
							Karini AI LLC employees and/or their agents. For additional
							information about or assistance with Client Login features and
							usage, please contact your Karini AI LLC sales, technical or
							administrative representative.
						</p>
					</div>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">
							Enforcement of this Privacy Statement
						</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							If you have questions regarding this statement, please contact
							Karini AI LLC at the postal and/or email addresses below.
						</p>
					</div>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">
							Changes to this Statement
						</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							We may occasionally update this privacy statement. When we do, we
							will also revise the “updated” date at the top of this Privacy
							page, and may also send you a notification directly. We encourage
							you to periodically review this privacy statement to stay informed
							about how we are helping to protect the personal information we
							collect. Your continued use of the service constitutes your
							agreement to this privacy statement and any updates.If you have
							questions regarding this statement, please contact Karini AI LLC
							at the postal and/or email addresses below.
						</p>
					</div>
					<div className="space-y-2">
						<h2 className="text-black text-lg font-semibold">
							Contact Information
						</h2>
						<p className="text-secondary-700 text-sm leading-relaxed">
							Karini AI LLC welcomes your comments regarding this privacy
							statement. If you believe that Karini AI LLC has not adhered to
							this privacy statement, please contact us electronically or via
							postal mail at the addresses provided below, and we will use
							commercially reasonable efforts to promptly determine and remedy
							the problem. To make such a request, please send an email to help{" "} 
							<a className="text-primary-600" href="mailto:sales@karin.ai">
								 sales@karin.ai
							</a>{" "}
							or write us at Karini AI LLC, 2300 Lakeview Parkway, Suite 700,
							Alpharetta, Georgia, 30009.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default privacypolicy;
