/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.karini.ai",
			},
			{
				protocol: "https",
				hostname: "d189ftywc9pie0.cloudfront.net",
			},
		],
	},
};

module.exports = nextConfig;
