'use client';

import { motion } from 'framer-motion';
import { WifiOff, Home } from 'lucide-react';
import Link from 'next/link';
import { ScrollAnimation } from '@/components/ScrollAnimation';

export default function OfflinePage() {
	return (
		<div className="min-h-screen flex items-center justify-center px-4" role="main" aria-label="Offline Page">
			<div className="text-center max-w-2xl mx-auto relative z-10">
				<ScrollAnimation>
					<motion.div
						className="relative"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<motion.div
							className="flex justify-center mb-8"
							animate={{
								y: [0, -20, 0],
								rotate: [0, -5, 5, 0]
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut"
							}}
						>
							<WifiOff
								className="w-32 h-32 text-gray-400"
								role="img"
								aria-label="No Internet Connection Icon"
							/>
						</motion.div>
					</motion.div>
				</ScrollAnimation>

				<ScrollAnimation>
					<motion.h1
						className="text-3xl md:text-4xl font-bold mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						No Internet Connection
					</motion.h1>
				</ScrollAnimation>

				<ScrollAnimation>
					<motion.p
						className="text-gray-400 mb-8 text-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						Please check your internet connection and try again
					</motion.p>
				</ScrollAnimation>

				<ScrollAnimation>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
					>
						<Link
							href="/"
							className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors group"
							role="button"
							aria-label="Try Again"
						>
							<Home className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
							<span>Try Again</span>
						</Link>
					</motion.div>
				</ScrollAnimation>

				<motion.div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] -z-10 pointer-events-none"
					animate={{
						background: [
							"radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 50%)",
							"radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 50%)",
							"radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 50%)"
						]
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
			</div>
		</div>
	);
}