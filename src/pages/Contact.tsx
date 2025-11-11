'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent) => {
	e.preventDefault();
	setIsSubmitting(true);
	setSubmitStatus('idle');

	try {
		const response = await fetch('/api/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
		});

		const result = await response.json();

		if (response.ok) {
		setSubmitStatus('success');
		// Reset form
		setFormData({
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: ''
		});
		} else {
		setSubmitStatus('error');
		console.error('Failed to send message:', result.error);
		}
	} catch (error) {
		setSubmitStatus('error');
		console.error('Error sending message:', error);
	} finally {
		setIsSubmitting(false);
	}
	};

	const contactInfo = [
		{
			icon: <Mail className="w-5 h-5" />,
			label: 'Email',
			value: 'a.ddumba@kyakabi.com',
			link: 'mailto:a.ddumba@kyakabi.com'
		},
		{
			icon: <Phone className="w-5 h-5" />,
			label: 'Phone',
			value: '+256701019242',
			link: 'tel:+256701019242'
		},
		{
			icon: <MapPin className="w-5 h-5" />,
			label: 'Location',
			value: 'Kampala, Uganda'
		},
		{
			icon: <Clock className="w-5 h-5" />,
			label: 'Time Zone',
			value: 'EAT (UTC+3)'
		}
	];

	const socialLinks = [
		{
			icon: <Github className="w-5 h-5" />,
			label: 'GitHub',
			link: 'https://github.com/abdallahddumbakato'
		},
		{
			icon: <Linkedin className="w-5 h-5" />,
			label: 'LinkedIn',
			link: 'https://linkedin.com/in/Hatalabdallah'
		},
		{
			icon: <MessageCircle className="w-5 h-5" />,
			label: 'WhatsApp',
			link: 'https://wa.me/+256701019242'
		}
	];

	return (
		<div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-6xl mx-auto pb-16 sm:pb-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<motion.div
					className="flex items-center gap-3 mb-8 sm:mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />
					<h2 className="text-3xl sm:text-4xl font-bold gradient-text">Get in Touch</h2>
				</motion.div>

				<div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 sm:gap-12">
					{/* Left Column - Contact Information */}
					<div className="space-y-6 sm:space-y-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="bg-gray-800/50 p-5 sm:p-6 rounded-xl backdrop-blur-sm"
						>
							<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
							<div className="space-y-3 sm:space-y-4">
								{contactInfo.map((info, index) => (
									<motion.div
										key={info.label}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
										className="group"
									>
										{info.link ? (
											<a
												href={info.link}
												className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-white/5 transition-colors"
											>
												<div className="text-gray-400 group-hover:text-white transition-colors">
													{info.icon}
												</div>
												<div>
													<p className="text-xs sm:text-sm text-gray-400">{info.label}</p>
													<p className="text-sm sm:text-base text-white group-hover:text-white transition-colors">
														{info.value}
													</p>
												</div>
											</a>
										) : (
											<div className="flex items-center space-x-3 p-2 sm:p-3">
												<div className="text-gray-400">{info.icon}</div>
												<div>
													<p className="text-xs sm:text-sm text-gray-400">{info.label}</p>
													<p className="text-sm sm:text-base text-white">{info.value}</p>
												</div>
											</div>
										)}
									</motion.div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="bg-gray-800/50 p-5 sm:p-6 rounded-xl backdrop-blur-sm"
						>
							<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Connect with Me</h3>
							<div className="flex flex-wrap gap-3 sm:gap-4">
								{socialLinks.map((social, index) => (
									<motion.a
										key={social.label}
										href={social.link}
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
										className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group flex-1 sm:flex-none justify-center sm:justify-start"
									>
										<span className="text-gray-400 group-hover:text-white transition-colors">
											{social.icon}
										</span>
										<span className="text-gray-400 group-hover:text-white transition-colors text-sm">
											{social.label}
										</span>
									</motion.a>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="bg-gray-800/50 p-5 sm:p-6 rounded-xl backdrop-blur-sm"
						>
							<h3 className="text-lg sm:text-xl font-semibold mb-4">Office Hours</h3>
							<div className="space-y-2 text-gray-400 text-sm sm:text-base">
								<p>Monday - Friday: 9:00 AM - 6:00 PM (EAT)</p>
								<p>Saturday: 10:00 AM - 2:00 PM (EAT)</p>
								<p>Sunday: Closed</p>
							</div>
						</motion.div>
					</div>

					{/* Right Column - Contact Form */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="bg-gray-800/50 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
					>
						<h3 className="text-lg sm:text-xl font-semibold mb-6">Send a Message</h3>
						<form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
							<div className="grid md:grid-cols-2 gap-5 sm:gap-6">
								<div>
									<label htmlFor="name" className="block text-sm font-medium mb-2">
										Name
									</label>
									<input
										type="text"
										id="name"
										required
										className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition-colors text-sm sm:text-base"
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium mb-2">
										Email
									</label>
									<input
										type="email"
										id="email"
										required
										className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition-colors text-sm sm:text-base"
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									/>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-5 sm:gap-6">
								<div>
									<label htmlFor="phone" className="block text-sm font-medium mb-2">
										Phone
									</label>
									<input
										type="tel"
										id="phone"
										className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition-colors text-sm sm:text-base"
										value={formData.phone}
										onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
									/>
								</div>
								<div>
									<label htmlFor="subject" className="block text-sm font-medium mb-2">
										Subject
									</label>
									<input
										type="text"
										id="subject"
										required
										className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition-colors text-sm sm:text-base"
										value={formData.subject}
										onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
									/>
								</div>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium mb-2">
									Message
								</label>
								<textarea
									id="message"
									rows={6}
									required
									className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition-colors resize-none text-sm sm:text-base"
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
							>
								{isSubmitting ? (
									'Sending...'
								) : (
									<>
										Send Message
										<Send className="w-4 h-4" />
									</>
								)}
							</button>

							{submitStatus === 'success' && (
								<motion.p
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-green-400 text-center text-sm sm:text-base"
								>
									Message sent successfully! I'll get back to you soon.
								</motion.p>
							)}

							{submitStatus === 'error' && (
								<motion.p
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-red-400 text-center text-sm sm:text-base"
								>
									Failed to send message. Please try again or contact me directly.
								</motion.p>
								)}
						</form>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;