'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
	const achievements = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "10+ Projects",
			description: "Completed full-stack web applications"
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "Professional Experience",
			description: "Software development projects"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "4.0/4.0 GPA",
			description: "Current academic excellence"
		}
	];

	const interests = [
		"Web Development",
		"UI/UX Design",
		"Cloud Computing",
		"Database Systems",
		"Software Engineering",
		"Artificial Intelligence"
	];

	return (
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
							alt="Ddumba Abdallah Kato"
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</ScrollAnimation>

				<ScrollAnimation className="space-y-6">
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							Hi! I'm Ddumba Abdallah Kato, a passionate software developer with expertise in building modern web applications. My journey in tech started during my university years, where I discovered my love for creating innovative solutions through code.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Currently pursuing my Bachelor of Science in Information Technology with a perfect 4.0 GPA at YMCA Comprehensive Institute, I've maintained strong academic performance while actively engaging in real-world projects. My previous Bachelor's degree in Computer Science with First Class Honours from Islamic University in Uganda has provided me with a solid foundation in software development.
						</p>
						<p className="text-gray-300 leading-relaxed">
							I specialize in web technologies, database systems, and cloud computing, with a keen interest in creating performant and user-friendly applications. My experience includes working on various software development projects and continuously learning new technologies.
						</p>
					</div>

					<ScrollAnimation>
						<div className="pt-4">
							<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
							<ul className="list-none space-y-3">
								{["Based in Kampala, Uganda", "BSc in Information Technology (Current) - 4.0/4.0 GPA", "BSc in Computer Science (First Class Honours) - 4.58/5.0 GPA"].map((fact, index) => (
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
	);
};

export default About;
