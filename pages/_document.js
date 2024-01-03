import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.png" />
				{/* Google Analytics (gtag.js) */}
				<Script
					id="ga1"
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-ZPKWXDBMEZ"
				></Script>
				<Script
					id="ga2"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());
                            gtag('config', 'G-ZPKWXDBMEZ');
                        `,
					}}
				></Script>
				{/* End Google Analytics (gtag.js) */}

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
				<script
					id="semrush"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `(function() {
								window.SM_PAGEIMPROVE = window.SM_PAGEIMPROVE || {ready: false}
								window.addEventListener(
								'pageimprove.initialized', 
								function() {
									window.SM_PAGEIMPROVE.ready = true
								}
								)
								var script = document.createElement('script')
								script.id = 'ceb3c41b-43bf-4f05-bfe7-5f164276f462'
								script.src = 'https://pageimprove.io/react'
								script.type = 'module'
								document.head.appendChild(script)
							})();`,
					}}
				></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
