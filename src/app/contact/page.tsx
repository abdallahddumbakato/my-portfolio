import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Ddumba Abdallah Kato',
	description: 'Get in touch with Ddumba Abdallah Kato, a Platform & AI Systems Engineer specializing in AI infrastructure and cloud platforms.',
};

export default function ContactPage() {
	return <Contact />;
}