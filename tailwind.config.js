/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						a: {
							color: "#1d4ed8", // this is Tailwind's blue-500
							"&:hover": {
								color: "#2563eb", // this is Tailwind's blue-600
							},
						},
						p: {
							color: "var(--foreground)",
							fontWeight: "400",
							overflowWrap: "break-normal",
						},
						strong: {
							color: "var(--foreground)",
						},
						h1: {
							color: "var(--foreground)",
						},
						h2: {
							color: "var(--foreground)",
						},
						h3: {
							color: "var(--foreground)",
						},
						h4: {
							color: "var(--foreground)",
						},
						h5: {
							color: "var(--foreground)",
						},
						h6: {
							color: "var(--foreground)",
						},
						table: {
							maxWidth: "90%",
							// display: "block",
							// "overflow-x": "auto",
							border: "1px solid #cbd5e1",
						},
						th: {
							color: "var(--foreground)",
							"text-align": "left",
							background: "var(--background)",
							"padding-left": "0.5rem",
						},
						td: {
							color: "var(--foreground)",
							"text-align": "left",
							fontWeight: "400",
							"padding-left": "0.5rem",
						},
						tbody: {
							color: "var(--foreground)",
							fontWeight: "300",
						},
						code: {
							maxWidth: "90%",
						},
						pre: {
							// color: "var(--foreground)",
							// maxWidth: "600px",
							maxWidth: "90%",
						},
						// em: {
						// 	color: "var(--foreground)",
						// },
						blockquote: {
							color: "var(--foreground)",
						},
						li: {
							color: "var(--foreground)",
							fontWeight: "400",
						},
						img: {
							borderRadius: "var(--radius)",
							display: "block",
							marginLeft: "auto",
							marginRight: "auto",
							maxWidth: "95%",
						},
						video: {
							borderRadius: "var(--radius)",
							display: "block",
							marginLeft: "auto",
							marginRight: "auto",
							maxWidth: "90%",
						},
						iframe: {
							borderRadius: "var(--radius)",
							display: "block",
							marginLeft: "auto",
							marginRight: "auto",
							maxWidth: "90%",
						},
					},
				},
			},
			backgroundImage: {
				// hero_img: "url('https://d189ftywc9pie0.cloudfront.net/assets/images/tool_image.png')",
				about_img:
					"url('https://d189ftywc9pie0.cloudfront.net/assets/images/aboutus/aboutus_img.jpg')",
				solution_img:
					"url('https://d189ftywc9pie0.cloudfront.net/assets/images/solutions/solutions_img.jpg')",
				platform_img:
					"url('https://d189ftywc9pie0.cloudfront.net/assets/images/platform/platform_img.jpg')",
				gen_img:
					"url('https://d189ftywc9pie0.cloudfront.net/assets/images/services/gen_services_img.jpg')",
				ml_img:
					"url('https://d189ftywc9pie0.cloudfront.net/assets/images/services/ml_services_img.jpg')",
				databricks_img:
					"url('https://d189ftywc9pie0.cloudfront.net/assets/images/partners/databricks-partner-img.png')",
				partners_img:
					"url('https://d189ftywc9pie0.cloudfront.net/assets/images/partners/partners-winning.png')",
			},
			colors: {
				dark: "#111827", //dark purple
				medium: "#581C87", // medium purple
				light: "#7C3AED", // light purple
				primary: {
					50: "#f5f3ff",
					100: "#ede9fe",
					200: "#ddd6fe",
					300: "#c4b5fd",
					400: "#a78bfa",
					500: "#8b5cf6",
					600: "#7c3aed",
					700: "#6d28d9",
					800: "#5b21b6",
					900: "#4c1d95",
					950: "#2e1065",
				},
				secondary: {
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cbd5e1",
					400: "#94a3b8",
					500: "#64748b",
					600: "#475569",
					700: "#334155",
					800: "#1e293b",
					900: "#0f172a",
					950: "#020617",
				},
			},
		},
	},
	plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
