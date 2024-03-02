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
				hostname: "anistreams-nine.vercel.app"
			},
		],
	},
};

module.exports = nextConfig;