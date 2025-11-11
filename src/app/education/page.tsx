import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education - Ddumba Abdallah Kato',
	description: 'Ddumba Abdallah Kato\'s educational background including BSc in Information Technology from YMCA Comprehensive Institute and BSc in Computer Science from Islamic University in Uganda.',
};

export default function EducationPage() {
	return <Education />;
}