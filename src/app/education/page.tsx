import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education - Ddumba Abdallah Kato',
	description: 'Ddumba Abdallah Kato\'s educational background: Bachelor of Engineering (BEng) in Electrical and Electronics Engineering from Queen Mary University of London.',
};

export default function EducationPage() {
	return <Education />;
}