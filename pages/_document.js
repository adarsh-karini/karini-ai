import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Karini AI" />
				<meta property="og:url" content="https://www.karini.ai/" />
				<meta property="og:image" content="https://karini-favicon.ico" />
				<meta
					property="og:description"
					content="Karini AI - Powering Evolution in Generative AI. Build and manage production-grade generative AI applications with an easy-to-use visual interface. Try copilot now!"
				/>

				<link rel="icon" type="image/x-icon" href="/karini-favicon.png" />
				<link rel="icon" type="image/x-icon" href="/karini-favicon.ico" />
				<link
					rel="shortcut icon"
					href="/karini-favicon.ico"
					type="image/x-icon"
				/>

				<script
					id="ga0"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `{
							"@context": "https://schema.org",
							"@type": "Organization",
							"name": "Karini Ai",
							"alternateName": "Karini",
							"url": "https://www.karini.ai/",
							"logo": "https://karini.ai/karini-logo.png",
							"sameAs": [
								"https://www.linkedin.com/company/karini-ai/",
								"https://twitter.com/karini_ai"
							]}`,
					}}
				/>
				<script
					id="ga1"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `{
							"@context": "https://schema.org/",
							"@type": "WebSite",
							"name": "Karini Ai",
							"url": "https://www.karini.ai/",
							"potentialAction": {
								"@type": "SearchAction",
								"target": "https://www.karini.ai/platforms{search_term_string}https://www.karini.ai/aboutus",
								"query-input": "required name=search_term_string"
							}
							}
						`,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
				{/* Google Analytics (gtag.js) */}
				<Script
					id="ga001"
					type="text/javascript"
					dangerouslySetInnerHTML={{
						__html: `{(function (c, l, a, r, i, t, y) {
						c[a] =
							c[a] ||
							function () {
								(c[a].q = c[a].q || []).push(arguments);
							};
						t = l.createElement(r);
						t.async = 1;
						t.src = "https://www.clarity.ms/tag/" + i;
						y = l.getElementsByTagName(r)[0];
						y.parentNode.insertBefore(t, y);
					})(window, document, "clarity", "script", "kyysgqymfd")}`,
					}}
				></Script>

				<Script
					id="ga2"
					src="https://www.googletagmanager.com/gtag/js?id=G-ZPKWXDBMEZ"
					strategy="afterInteractive"
				/>
				<Script
					id="ga3"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-ZPKWXDBMEZ');
                        `,
					}}
				/>
				{/* Google Analytics (gtag.js) end*/}
			</body>
		</Html>
	);
}
