/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "anistreams-production-9925.up.railway.app",
			},
		],
	},
};

module.exports = nextConfig;