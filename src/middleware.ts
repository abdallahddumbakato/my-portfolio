import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100;
const ipRequestMap = new Map<string, { count: number; timestamp: number }>();

// Clean up old entries every 5 minutes
setInterval(() => {
	const now = Date.now();
	for (const [ip, data] of ipRequestMap.entries()) {
		if (now - data.timestamp > RATE_LIMIT_WINDOW) {
			ipRequestMap.delete(ip);
		}
	}
}, 5 * 60 * 1000);

export function middleware(request: NextRequest) {
	const response = NextResponse.next();

	// Security Headers
	response.headers.set('X-DNS-Prefetch-Control', 'on');
	response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
	response.headers.set('X-XSS-Protection', '1; mode=block');
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');

	// Enhanced Rate Limiting
	const ip = request.ip || 'unknown';
	const now = Date.now();
	const requestData = ipRequestMap.get(ip) || { count: 0, timestamp: now };

	// Reset count if window has passed
	if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
		requestData.count = 0;
		requestData.timestamp = now;
	}

	requestData.count++;
	ipRequestMap.set(ip, requestData);

	if (requestData.count > MAX_REQUESTS) {
		return new NextResponse('Too Many Requests', {
			status: 429,
			headers: {
				'Retry-After': '60',
				'Content-Type': 'text/plain'
			}
		});
	}

	// Add rate limit headers
	response.headers.set('X-RateLimit-Limit', MAX_REQUESTS.toString());
	response.headers.set('X-RateLimit-Remaining', (MAX_REQUESTS - requestData.count).toString());
	response.headers.set('X-RateLimit-Reset', (requestData.timestamp + RATE_LIMIT_WINDOW).toString());

	// Prevent common attack patterns
	const url = request.nextUrl.pathname.toLowerCase();
	const blockedPatterns = ['/wp-admin', '/wp-login', '/admin', '.php', '.env'];
	if (blockedPatterns.some(pattern => url.includes(pattern))) {
		return NextResponse.rewrite(new URL('/not-found-trigger', request.url));
	}

	return response;
}

export const config = {
	matcher: '/:path*',
};