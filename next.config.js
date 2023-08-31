/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'posgrado-unmsm.s3.sa-east-1.amazonaws.com',
			'posgrado-unmsm.s3.amazonaws.com',
			'swiperjs.com',
			'unmsm-web-static-files.s3.sa-east-1.amazonaws.com',
			'unmsm-web-static-files.s3.amazonaws.com',
			'robohash.org',
			'biologia-unmsm.s3.us-east-2.amazonaws.com',
			'unmsm-static-files.s3.us-east-2.amazonaws.com',
		],
	},
	output: 'standalone',
};

module.exports = nextConfig;
