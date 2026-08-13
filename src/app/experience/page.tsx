import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Experience - Ddumba Abdallah Kato',
	description: 'Ddumba Abdallah Kato\'s professional experience as a Platform & AI Systems Engineer across SymphonyAI, Kyakabi Group, Nexus Cloud Solutions, CodeClause, and Oasis Infobyte.',
};

export default function ExperiencePage() {
	return <Experience />;
}