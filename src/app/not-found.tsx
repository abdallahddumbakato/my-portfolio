'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Code, Search, MessageSquare } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
			<div className="text-center max-w-2xl mx-auto relative z-10">
				<ScrollAnimation>
					<motion.div
						className="relative mb-8"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						{/* Animated Code-like Background */}
						<div className="absolute inset-0 opacity-10">
							<div className="text-6xl font-mono text-gray-500">
								{'<404/>'}
							</div>
						</div>
						
						<motion.div
							className="text-[10rem] md:text-[12rem] font-bold leading-none gradient-text font-mono"
							animate={{
								y: [0, -15, 0],
								textShadow: [
									"0 0 20px rgba(255,255,255,0.1)",
									"0 0 30px rgba(255,255,255,0.3)",
									"0 0 20px rgba(255,255,255,0.1)"
								]
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut"
							}}
						>
							404
						</motion.div>

						{/* Floating Code Elements */}
						<motion.div
							className="absolute -top-4 -left-4 text-2xl opacity-30"
							animate={{ rotate: 360 }}
							transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
						>
							<Code className="w-8 h-8" />
						</motion.div>
						<motion.div
							className="absolute -bottom-4 -right-4 text-2xl opacity-30"
							animate={{ rotate: -360 }}
							transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
						>
							<Search className="w-8 h-8" />
						</motion.div>
					</motion.div>
				</ScrollAnimation>

				<ScrollAnimation>
					<motion.h2
						className="text-2xl md:text-3xl font-bold mb-4 gradient-text"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						Page Not Found in the Digital Void
					</motion.h2>
				</ScrollAnimation>

				<ScrollAnimation>
					<motion.p
						className="text-gray-400 mb-6 text-base md:text-lg leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						It seems this page has encountered a <span className="text-blue-400">404 error</span>. 
						While I debug this issue, let me redirect you to something more functional.
					</motion.p>
				</ScrollAnimation>

				<ScrollAnimation>
					<motion.p
						className="text-gray-500 mb-8 text-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
					>
						— Ddumba Abdallah Kato, Software Developer
					</motion.p>
				</ScrollAnimation>

				<ScrollAnimation>
					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
					>
						<Link
							href="/"
							className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 group shadow-lg hover:shadow-xl"
						>
							<Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
							<span>Return to Homepage</span>
						</Link>
						
						<Link
							href="/contact"
							className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300 group border border-white/10 hover:border-white/20"
						>
							<MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
							<span>Contact Me</span>
						</Link>
					</motion.div>
				</ScrollAnimation>

				{/* Quick Navigation Links */}
				<ScrollAnimation>
					<motion.div
						className="mt-12 pt-8 border-t border-white/10"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.7 }}
					>
						<p className="text-gray-500 text-sm mb-4">Quick Navigation</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm">
							<Link href="/about" className="text-gray-400 hover:text-white transition-colors hover:underline">
								About Me
							</Link>
							<Link href="/projects" className="text-gray-400 hover:text-white transition-colors hover:underline">
								Projects
							</Link>
							<Link href="/skills" className="text-gray-400 hover:text-white transition-colors hover:underline">
								Skills
							</Link>
							<Link href="/certificates" className="text-gray-400 hover:text-white transition-colors hover:underline">
								Certificates
							</Link>
						</div>
					</motion.div>
				</ScrollAnimation>

				{/* Background Animation */}
				<motion.div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10 pointer-events-none opacity-50"
					animate={{
						background: [
							"radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
							"radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
							"radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
							"radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
						]
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>

				{/* Binary Rain Effect */}
				<div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
					{Array.from({ length: 20 }).map((_, i) => (
						<motion.div
							key={i}
							className="absolute text-green-400 text-xs font-mono"
							style={{
								left: `${Math.random() * 100}%`,
								top: '-20px'
							}}
							animate={{
								y: ['0vh', '100vh'],
								opacity: [0, 1, 0]
							}}
							transition={{
								duration: Math.random() * 10 + 10,
								repeat: Infinity,
								delay: Math.random() * 5,
								ease: "linear"
							}}
						>
							{Math.random() > 0.5 ? '1' : '0'}
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
