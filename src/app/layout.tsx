import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import SEO from '@/components/SEO';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Ddumba Abdallah Kato - Software Developer & Full Stack Specialist',
	description: 'Software Developer specializing in Full Stack Development with expertise in Web Technologies, Database Systems and Cloud Computing. Based in Kampala, Uganda.',
	keywords: 'Ddumba Abdallah Kato, Software Developer, Full Stack Developer, Web Developer, React Developer, Next.js Expert, Database Developer, Frontend Specialist, Backend Developer, JavaScript Expert, TypeScript Developer, Node.js Developer, MongoDB Expert, SQL Developer, Uganda Developer, Kampala Developer',
	authors: [{ name: 'Ddumba Abdallah Kato' }],
	creator: 'Ddumba Abdallah Kato',
	manifest: '/manifest.json',
	themeColor: '#000000',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://ddumba.kyakabi.com/',
		title: 'Ddumba Abdallah Kato - Software Developer & Full Stack Specialist',
		description: 'Software Developer specializing in Full Stack Development with expertise in Web Technologies, Database Systems and Cloud Computing. Based in Kampala, Uganda.',
		siteName: 'Ddumba Abdallah Kato Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Ddumba Abdallah Kato - Software Developer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ddumba Abdallah Kato - Software Developer & Full Stack Specialist',
		description: 'Software Developer specializing in Full Stack Development with expertise in Web Technologies, Database Systems and Cloud Computing.',
		creator: '@Abdallahddumbakato',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	metadataBase: new URL('https://ddumba.kyakabi.com'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/',
		},
	},
	verification: {
		google: 'google5ab779767ea55a1b',
	},
	category: 'technology',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<GoogleAnalytics />
				<link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/nextjs.png" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="/manifest.json" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;" />
			</head>
			<body>
				<div className="min-h-screen flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
				<SEO />
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
