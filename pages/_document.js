import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.png" />
				{/* Google Tag Manager */}
				{/* <Script
					id="gtm-script"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){
									w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
									var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
									j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
									f.parentNode.insertBefore(j,f);
								})(window,document,'script','dataLayer','GTM-KBTD3M2M');
								`,
					}}
				></Script> */}
				{/* End Google Tag Manager */}

				{/* Google Analytics (gtag.js) */}
				<Script
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=G-ZPKWXDBMEZ"
				></Script>
				<Script
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', 'G-ZPKWXDBMEZ');
                   			 `,
					}}
				></Script>
				{/* End Google Analytics (gtag.js) */}
				
				{/* Schema Markup */}
				<Script
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
				></Script>
				{/* End Schema Markup */}
			</Head>
			<body>
				{/* Google Tag Manager (noscript) */}
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBTD3M2M" height="0" width="0" style="display: none; visibility: hidden;" />`,
					}}
				/>

				{/* End Google Tag Manager (noscript) */}
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
