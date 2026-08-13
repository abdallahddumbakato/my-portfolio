'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';

const About = () => {
	const achievements = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "AI Infrastructure",
			description: "Architecting auto-scaling clusters for GPU-intensive workloads"
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "7+ Years Experience",
			description: "Platform engineering, AI systems, and cloud infrastructure"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "BEng Electrical & Electronic Engineering",
			description: "Queen Mary University of London"
		}
	];

	const interests = [
		"AI Infrastructure",
		"Inference Efficiency",
		"High-Fidelity RAG",
		"Automated Governance",
		"Platform Engineering",
		"Kubernetes & AWS"
	];

	return (
		<>
			<SEO 
				title="About Ddumba Abdallah Kato - Platform & AI Systems Engineer"
				description="Learn about Ddumba Abdallah Kato, a Platform & AI Systems Engineer specializing in AI infrastructure, LLM systems, and production-grade cloud platforms. Based in Kampala, Uganda."
				canonicalUrl="https://ddumba.kyakabi.com/about"
			/>
			<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
				<ScrollAnimation>
					<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
						About Me
					</motion.h2>
				</ScrollAnimation>

				<div className="grid md:grid-cols-2 gap-8">
					<ScrollAnimation>
						<div className="aspect-square overflow-hidden rounded-2xl">
							<img
								src="/profile/profile.jpg"
								alt="Ddumba Abdallah Kato - Platform & AI Systems Engineer"
								className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
							/>
						</div>
					</ScrollAnimation>

					<ScrollAnimation className="space-y-6">
						<div className="space-y-4">
							<p className="text-gray-300 leading-relaxed">
								Hi! I'm Ddumba Abdallah Kato, an AI Platform Engineer focused on production AI and infrastructure. I build the "engines" that allow AI to survive in production — while much of the industry focuses on prompt engineering, I focus on the "Day 2" reality of why inference cost runs higher than projected, why RAG pipeline latency lags, and how to scale a Kubernetes cluster to handle tens of thousands of concurrent agentic requests.
							</p>
							<p className="text-gray-300 leading-relaxed">
								I sit at the intersection of platform reliability and AI system design. My goal is to transform "experimental AI" into enterprise-grade infrastructure that is resilient, observable, and profitable — bridging the gap between model development and production-grade deployment so AI platforms are scalable and cost-efficient from the ground up.
							</p>
							<p className="text-gray-300 leading-relaxed">
								I typically work with engineering teams facing AI systems that work in dev but fail to scale under production loads, high inference costs without a clear optimization strategy, latency and observability gaps in complex RAG pipelines, and infrastructure bottlenecks when deploying GPU-intensive workloads.
							</p>
						</div>

						<ScrollAnimation>
							<div className="pt-4">
								<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
								<ul className="list-none space-y-3">
									{["Based in Kampala, Uganda (Remote)", "Senior Platform Engineer (AI Systems) at SymphonyAI", "Director Solutions Architecture at Kyakabi Group", "BEng Electrical & Electronics Engineering (2.1) - Queen Mary University of London"].map((fact, index) => (
										<motion.li
											key={fact}
											className="flex items-center space-x-2 text-gray-300"
										>
											<span className="w-2 h-2 bg-white rounded-full" />
											<span>{fact}</span>
										</motion.li>
									))}
								</ul>
							</div>
						</ScrollAnimation>

						<ScrollAnimation>
							<div className="flex justify-start space-x-4">
								<a
									href="/files/cv_pdf/Ddumba_Abdallah_Kato_CV.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
								>
									Download CV
								</a>
								<a
									href="/skills"
									className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
								>
									My Skills
								</a>
							</div>
						</ScrollAnimation>
					</ScrollAnimation>
				</div>

				<ScrollAnimation>
					<div className="mt-16">
						<h3 className="text-2xl font-semibold mb-8 gradient-text">Achievements</h3>
						<div className="grid md:grid-cols-3 gap-6">
							{achievements.map((achievement, index) => (
								<ScrollAnimation key={achievement.title}>
									<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
										<div className="text-white mb-4">{achievement.icon}</div>
										<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
										<p className="text-gray-400">{achievement.description}</p>
									</div>
								</ScrollAnimation>
							))}
						</div>
					</div>
				</ScrollAnimation>

				<ScrollAnimation>
					<div className="mt-16">
						<h3 className="text-2xl font-semibold mb-8 gradient-text">Areas of Interest</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{interests.map((interest, index) => (
								<ScrollAnimation key={interest}>
									<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
										<Globe className="w-5 h-5 text-gray-400" />
										<span className="text-gray-300">{interest}</span>
									</div>
								</ScrollAnimation>
							))}
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</>
	);
};

export default About;
