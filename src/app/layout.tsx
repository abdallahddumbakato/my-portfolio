import type { Metadata, Viewport } from 'next';
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
    title: 'Ddumba Abdallah Kato - AI Engineer & Solutions Architect',
    description: 'AI Engineer and Solutions Architect building enterprise GenAI, MLOps, and cloud-native AI platforms on Microsoft Azure — across defence, financial services, and the public sector. Based in Kampala, Uganda.',
    keywords: 'Ddumba Abdallah Kato, AI Engineer, Solutions Architect, GenAI, MLOps, Azure AI, Cloud Platform Engineering, RAG, LLM Systems, DevOps, Uganda Engineer, Kampala Engineer',
    authors: [{ name: 'Ddumba Abdallah Kato' }],
    creator: 'Ddumba Abdallah Kato',
    manifest: '/manifest.json',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ddumba.kyakabi.com/',
        title: 'Ddumba Abdallah Kato - AI Engineer & Solutions Architect',
        description: 'AI Engineer and Solutions Architect building enterprise GenAI, MLOps, and cloud-native AI platforms on Microsoft Azure — across defence, financial services, and the public sector. Based in Kampala, Uganda.',
        siteName: 'Ddumba Abdallah Kato Portfolio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Ddumba Abdallah Kato - AI Engineer & Solutions Architect',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ddumba Abdallah Kato - AI Engineer & Solutions Architect',
        description: 'AI Engineer and Solutions Architect specializing in GenAI, MLOps, and cloud-native platforms on Microsoft Azure.',
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

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#000000',
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