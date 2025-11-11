'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

const Home = dynamic(() => import('@/pages/Home'), {
	loading: () => <Loading />,
	ssr: false,
	suspense: true,
});

export default function HomePage() {
	return (
		<Suspense fallback={<Loading />}>
			<Home />
		</Suspense>
	);
}
