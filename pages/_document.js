import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
				{/* Google Analytics (gtag.js) */}
				<Script
					id="ga1"
					src="https://www.googletagmanager.com/gtag/js?id=G-ZPKWXDBMEZ"
					strategy="afterInteractive"
				/>
				<Script
					id="ga2"
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
