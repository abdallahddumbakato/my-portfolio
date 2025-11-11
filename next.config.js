const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['images.unsplash.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
		formats: ['image/webp', 'image/avif'],
	},
	headers: async () => {
		return [
			{
				source: '/:path*',
				headers: [
					{ key: 'X-DNS-Prefetch-Control', value: 'on' },
					{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
					{ key: 'X-XSS-Protection', value: '1; mode=block' },
					{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
					{ key: 'X-Content-Type-Options', value: 'nosniff' },
					{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
					{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
					{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
				],
			},
		];
	},
	experimental: {
		// Remove optimizeFonts and modern (they're now default)
		scrollRestoration: true,
	},
};

module.exports = withPWA(nextConfig);
