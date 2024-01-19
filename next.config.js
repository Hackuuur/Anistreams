/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "http",
				hostname: " http://anistreams-production-8b48.up.railway.app",
			},
		],
	},
};

module.exports = nextConfig;