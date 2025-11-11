import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Ddumba Abdallah Kato - Software Developer',
	description: 'Learn about Ddumba Abdallah Kato, a software developer with expertise in building web applications with React, Node.js, and modern web technologies.',
};

export default function AboutPage() {
	return <About />;
}