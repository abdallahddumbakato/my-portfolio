import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Certificates - Ddumba Abdallah Kato',
	description: 'View Ddumba Abdallah Kato\'s certifications and achievements in AWS, cloud infrastructure, DevOps, and programming.',
};

export default function CertificatesPage() {
	return <Certificates />;
}