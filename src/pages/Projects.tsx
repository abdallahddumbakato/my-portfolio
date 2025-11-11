'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
	{
		title: 'Live Docs',
		description: 'Real-time collaborative document editor built with Next.js, TypeScript, and Tailwind CSS, featuring live editing, comments, and notifications.',
		image: '/projects_img/project-1.png',
		github: 'https://github.com/abdallahddumbakato/LiveDocs',
		live: 'https://livedocs11.vercel.app',
		tags: ["Next.js", "TypeScript", "Liveblocks", "Lexical Editor", "ShadCN", "Tailwind CSS"]
	},
	{
		title: 'Figma Clone',
		description: 'A real-time collaborative design tool inspired by Figma. This application allows users to create, modify, and collaborate on designs in real- time.',
		image: '/projects_img/project-2.png',
		github: 'https://github.com/abdallahddumbakato/Figma-Clone',
		live: 'https://tigma1.vercel.app/',
		tags: ["Next.js", "TypeScript", "Liveblocks", "Fabric.js", "Shadcn", "Tailwind CSS"]
	},
	{
		title: 'Video Conferencing App',
		description: 'The Video Conferencing App enables users to create and join video meetings with chat, screen sharing, and recording features.',
		image: '/projects_img/project-3.png',
		github: 'https://github.com/abdallahddumbakato/Video-Conferencing-App',
		live: 'https://yoom01.vercel.app/',
		tags: ["Tailwind CSS", "React.js", "Next.js", "Clerk", "Stream"]
	},
	{
		title: 'Gemini Chatbot',
		description: 'React-based chatbot clone of Google Gemini AI. It offers a chat interface, uses Gemini for responses, and is styled with CSS.',
		image: '/projects_img/project-4.png',
		github: 'https://github.com/abdallahddumbakato/Gemini-Chatbot',
		live: 'https://gamini-bot.vercel.app/',
		tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'Google APIs']
	},
	{
		title: 'Travel App',
		description: 'Travel App is a Next.js web application offering travel information, built with Tailwind CSS for a modular, responsive user interface.',
		image: '/projects_img/project-5.png',
		github: 'https://github.com/abdallahddumbakato/Travel-App',
		live: 'https://hilinking.vercel.app/',
		tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'TypeScript']
	},
	{
		title: 'Brainwave Project',
		description: 'A modern AI application built with React JS and Tailwind CSS, featuring smooth animations, unique design elements, and responsive layouts.Ideal for enhancing web development skills',
		image: '/projects_img/project-6.png',
		github: 'https://github.com/abdallahddumbakato/Brainwave-Project',
		live: 'https://brainswave.netlify.app/',
		tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'Vite']
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={project.github} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<Github className="w-4 h-4" />
										<span>Code</span>
									</a>
									<a href={project.live} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<ExternalLink className="w-4 h-4" />
										<span>Live</span>
									</a>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;