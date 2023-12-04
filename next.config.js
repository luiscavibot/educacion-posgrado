/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'posgrado-unmsm.s3.amazonaws.com',
			'unmsm-web-static-files.s3.sa-east-1.amazonaws.com',
			'dj6bwr7wzo1hi.cloudfront.net',
			'unmsm-static-files.s3.us-east-2.amazonaws.com',
			'posgrado-unmsm.s3.sa-east-1.amazonaws.com',
		],
	},
	output: 'standalone',
};

module.exports = nextConfig;
