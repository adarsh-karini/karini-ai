import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.png" />
				{/* Google Analytics (gtag.js) */}
				<script
					id="ga1"
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-ZPKWXDBMEZ"
				></script>
				<script
					id="ga2"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());

									gtag('config', 'G-ZPKWXDBMEZ');`,
					}}
				></script>
				{/* Google Analytics (gtag.js) end*/}
				{/* Schema Markup */}
				<script
					id="schema-markup"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `{
									"@context": "https://schema.org/",
									"@type": "WebSite",
									"name": "karini",
									"url": "https://www.karini.ai/",
									"potentialAction": {
										"@type": "SearchAction",
										"target": "https://www.karini.ai/services/genai{search_term_string}https://www.karini.ai/services/genai",
										"query-input": "required name=search_term_string"
									}
									}`,
					}}
				></script>
				{/* End Schema Markup */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
