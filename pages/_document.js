import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@karini_ai" />
				<meta
					name="twitter:title"
					content="Karini AI | Powering Evolution in Generative AI"
				/>
				<meta
					name="twitter:description"
					content="Karini AI - Powering Evolution in Generative AI. Build and manage production-grade generative AI applications with an easy-to-use visual interface. Try copilot now!"
				/>
				<meta
					name="twitter:image"
					content="https://twitter.com/karini_ai/photo"
				/>

				<link rel="icon" type="image/x-icon" href="/karini-favicon.png" />
				<script type="text/javascript">
					{(function (c, l, a, r, i, t, y) {
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
					})(window, document, "clarity", "script", "kyysgqymfd")}
				</script>
			</Head>
			<body>
				<Main />
				<NextScript />
				{/* Google Analytics (gtag.js) */}
				<Script
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
				<Script
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
