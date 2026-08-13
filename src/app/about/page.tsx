import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Ddumba Abdallah Kato - Platform & AI Systems Engineer',
	description: 'Learn about Ddumba Abdallah Kato, a Platform & AI Systems Engineer specializing in AI infrastructure, LLM systems, and production-grade cloud platforms.',
};

export default function AboutPage() {
	return <About />;
}