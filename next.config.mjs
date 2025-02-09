/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.buzzfeed.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 's3.amazonaws.com',
				pathname: '/**',
			}, {
				protocol: 'https',
				hostname: 'placehold.co',
				pathname: '/**',
			}, {
				protocol: 'https',
				hostname: 'via.placeholder.com',
				pathname: '/**',
			}, {
				protocol: 'https',
				hostname: 'i.pravatar.cc',
				pathname: '/**',
			}
		]
	}
};

export default nextConfig;
