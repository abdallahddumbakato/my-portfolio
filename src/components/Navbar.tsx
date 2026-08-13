'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import SearchDialog from './SearchDialog';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const navLinks = [
		{ path: '/', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/education', label: 'Education' },
		{ path: '/experience', label: 'Experience' },
		{ path: '/skills', label: 'Skills' },
		{ path: '/projects', label: 'Projects' },
		{ path: '/certificates', label: 'Certificates' },
		{ path: '/contact', label: 'Contact' }
	];

	return (
		<motion.nav
			className="fixed top-0 w-full z-50"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="relative">
				<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

				<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						{/* Logo */}
						<Link href="/" className="flex items-center space-x-3">
							<Code2 className="w-8 h-8 text-white" />
							<span className="text-xl font-bold text-white">Ddumba Abdallah</span>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-6">
							<SearchDialog />
							{navLinks.map(link => (
								<Link
									key={link.path}
									href={link.path}
									className={`nav-link ${pathname === link.path ? 'bg-white/15 backdrop-blur-sm' : ''}`}
								>
									{link.label}
								</Link>
							))}
						</div>

						{/* Mobile header right section */}
						<div className="flex md:hidden items-center space-x-2">
							<SearchDialog />
							<button
								className="p-2 text-gray-400 hover:text-white transition-colors"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<motion.div
						className="md:hidden absolute top-full left-0 right-0 bg-black/50 backdrop-blur-xl"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2 }}
					>
						<div className="px-4 pt-2 pb-3 space-y-1">
							{navLinks.map(link => (
								<Link
									key={link.path}
									href={link.path}
									className={`block px-3 py-2 text-gray-400 hover:text-white transition-colors ${pathname === link.path ? 'bg-white/10 backdrop-blur-sm text-white' : ''
										}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
};

export default Navbar;