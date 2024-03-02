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
				hostname: "anistream-rkqfc6van-koh803074-gmailcom.vercel.app"
			},
		],
	},
};

module.exports = nextConfig;