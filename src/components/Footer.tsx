'use client';

import Link from 'next/link';
import { Code2, Github, Linkedin, Mail, Phone, Users, Send, MessageSquare } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const email = 'a.ddumba@kyakabi.com';
	const whatsappNumber = '+256701019242';

	const pageLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Education', path: '/education' },
		{ name: 'Experience', path: '/experience' },
		{ name: 'Skills', path: '/skills' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Certificates', path: '/certificates' },
		{ name: 'Contact', path: '/contact' },
		{ name: 'Kali Linux', path: '/kali' },
	];

	// Split links into columns of 3
	const column1 = pageLinks.slice(0, 3);
	const column2 = pageLinks.slice(3, 6);
	const column3 = pageLinks.slice(6, 9);

	return (
		<footer className="relative mt-24">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
					{/* Branding */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-3">
							<Code2 className="w-8 h-8 text-white" />
							<span className="text-xl font-bold text-white">Ddumba Abdallah Kato</span>
						</Link>
						<p className="text-sm text-gray-400">
							Software Developer based in Kampala, Uganda.
						</p>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Contact</h3>
						<ul className="space-y-3">
							<li>
								<a href="mailto:a.ddumba@kyakabi.com" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
									<Mail className="w-4 h-4" />
									a.ddumba@kyakabi.com
								</a>
							</li>
							<li>
								<a
									href="tel:+256701019242"
									className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
								>
									<Phone className="w-4 h-4" />
									+256701019242
								</a>
							</li>
						</ul>
					</div>

					{/* Links - First Column */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Quick Links</h3>
						<div className="grid grid-cols-3 gap-x-6 gap-y-3">
							{/* Column 1 */}
							<div>
								{column1.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>
							{/* Column 2 */}
							<div>
								{column2.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>
							{/* Column 3 */}
							<div>
								{column3.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>
						</div>
					</div>

					{/* Social */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Social</h3>
						<div className="flex space-x-4">
							<a
								href="https://github.com/abdallahddumbakato"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="https://ug.linkedin.com/in/abdallah-ddumba-kato-414462236"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href={`mailto:${email}`}
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Mail className="w-5 h-5" />
							</a>

							{/* New: Twitter Alternative */}
							<a
								href="https://twitter.com/Hatalabdallah"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<MessageSquare className="w-5 h-5" /> 
							</a>

							{/* New: Facebook Alternative */}
							<a
								href="https://www.facebook.com/abdallahddumba.kato/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Users className="w-5 h-5" />
							</a>
							
							{/* New: WhatsApp Alternative */}
							<a
								href={`https://wa.me/${whatsappNumber}`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Send className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-white/10 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-gray-400">
							© {currentYear} Ddumba Abdallah Kato. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<a href="" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
								<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 32 32">
									<path d="M12 1L24 22H0L12 1Z" />
								</svg>
								Ddumba's Portfolio
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
