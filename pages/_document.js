import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/x-icon" href="/karini-favicon.png" />
				<link rel="icon" type="image/x-icon" href="/karini-favicon.ico" />
				<link
					rel="shortcut icon"
					href="/karini-favicon.ico"
					type="image/x-icon"
				/>

				{/* <script type="text/javascript">
                  {(function(c,l,a,r,i,t,y){
                     c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                     t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                     y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                 })(window, document, "clarity", "script", "kusbcyumap")}
              </script>  */}
			</Head>
			<body>
				<Main />
				<NextScript />

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
				<Script
					id="bing001"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `(function(c,l,a,r,i,t,y){
							c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
							t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
							y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
						  })(window, document, "clarity", "script", "kusbcyumap");
						`,
					}}
				/>
			</body>
		</Html>
	);
}
