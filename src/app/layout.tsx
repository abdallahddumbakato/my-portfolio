import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Ddumba Abdallah Kato - Software Developer',
	description: 'Ddumba Abdallah Kato - Software Developer specializing in full stack development, web technologies, and modern web applications. Expert in database systems and cloud computing.',
	keywords: 'Ddumba Abdallah Kato, Software Developer, Full Stack Developer, Web Developer, React Developer, Next.js Expert, Database Developer, Frontend Specialist, Backend Developer, JavaScript Expert, TypeScript Developer, Node.js Developer, MongoDB Expert, SQL Developer, Uganda Developer',
	authors: [{ name: 'Ddumba Abdallah Kato' }],
	creator: 'Ddumba Abdallah Kato',
	manifest: '/manifest.json',
	themeColor: '#000000',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://ddumba.kyakabi.com/',
		title: 'Ddumba Abdallah Kato - Software Developer',
		description: 'Software Developer specializing in full stack development, web technologies, and modern web applications.',
		siteName: 'Ddumba Abdallah Kato Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ddumba Abdallah Kato - Software Developer',
		description: 'Software Developer specializing in full stack development, web technologies, and modern web applications.',
		creator: '@abdallahddumbakato',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	metadataBase: new URL('https://ddumba.kyakabi.com'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: '/googlea4a36904e14398c1.html',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
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
					<SpeedInsights />
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}