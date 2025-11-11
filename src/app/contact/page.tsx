import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Ddumba Abdallah Kato',
	description: 'Get in touch with Ddumba Abdallah Kato, a Software Developer specializing in full-stack development.',
};

export default function ContactPage() {
	return <Contact />;
}