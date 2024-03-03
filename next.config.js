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
				hostname: "anistreams-kohl.vercel.app"
			},
		],
	},
};

module.exports = nextConfig;