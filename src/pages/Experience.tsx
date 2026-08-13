'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';

const experiences = [
	{
		title: "Senior Platform Engineer (AI Systems)",
		company: "SymphonyAI",
		location: "London Area, United Kingdom · Remote",
		period: "Feb 2025 - Present",
		type: "Contract",
		image: null,
		certificateUrl: null,
		description: [
			"Architected the \"Day 2\" production infrastructure for SymphonyAI's Sensa Platform, an enterprise AI SaaS solution delivering predictive and generative AI capabilities across financial services and regulated banking environments",
			"Designed a disaggregated scaling model on Kubernetes that decouples compute stages, improving GPU utilization and system resilience for high-concurrency agentic requests",
			"Implemented NVIDIA Multi-Instance GPU (MIG) and Karpenter to partition hardware for varied workloads, reducing cloud expenditure by 22% while maintaining sub-200ms latency",
			"Modernized RAG infrastructure by building an event-driven Kafka pipeline, ensuring real-time synchronization between live data sources and Pinecone vector stores"
		]
	},
	{
		title: "Director Solutions Architecture",
		company: "Kyakabi Group",
		location: "Kampala, Central Region, Uganda · Hybrid",
		period: "Nov 2018 - Present",
		type: "Self-employed",
		image: null,
		certificateUrl: null,
		description: [
			"Oversee the strategic direction and technical roadmap of Kyakabi Group, a technology conglomerate delivering AI, Data, and Telecom solutions across East Africa, managing subsidiary brands Kyakabi AI, Data, and Telecom",
			"Lead the deployment of agentic systems for regional enterprises, bridging AI research and production-ready applications with a focus on LLM integration and custom RAG pipelines",
			"Engineered the group's cloud infrastructure portfolio and standardized multi-cloud deployment patterns for I/O-intensive enterprise platforms",
			"Architected a high-availability telecom platform supporting 99.99% uptime for SMS, Mass Email, and Programmable Chat services"
		]
	},
	{
		title: "DevOps Engineer",
		company: "Nexus Cloud Solutions Pty Ltd",
		location: "Melbourne, Australia · Remote",
		period: "Jul 2021 - Dec 2023",
		type: "Contract",
		image: null,
		certificateUrl: null,
		description: [
			"Led cloud transformation initiatives within modernization programmes, moving complex environments toward automated, sovereign, and secure GitOps models",
			"Spearheaded the transition to ArgoCD and standardized Terraform modules across five cross-functional teams, ensuring 100% consistency in VPC, IAM, and security configurations",
			"Automated secret rotation and encryption workflows instrumental in achieving audit-ready status for rigorous regulatory and safety audits"
		]
	},
	{
		title: "Software Engineer (Backend)",
		company: "CodeClause",
		location: "Remote",
		period: "Feb 2019 - Jun 2021",
		type: "Contract",
		image: "/experience/codeClause_page.jpg",
		certificateUrl: "/files/experience_pdf/codeClause.pdf",
		description: [
			"Developed high-throughput APIs using Python (FastAPI) designed for low-latency performance and high concurrency in a high-stakes public service environment",
			"Led a major refactor of the PostgreSQL catalog, optimizing query paths and indexing strategies to improve response times by 35% for mission-critical workflows",
			"Designed and implemented a background task engine using Redis and Celery, offloading non-blocking workloads for a seamless user experience during traffic spikes"
		]
	},
	{
		title: "Junior Network Engineer",
		company: "Oasis Infobyte",
		location: "Remote",
		period: "Jan 2017 - Jan 2019",
		type: "Full-time",
		image: "/experience/oasisInfobyte_page.jpg",
		certificateUrl: "/files/experience_pdf/oasisInfobyte.pdf",
		description: [
			"Managed core network infrastructure and hardware defining the Secure Gateway for Critical Network Infrastructure (CNI)",
			"Managed core data center hardware including Cisco and Juniper systems, ensuring high availability through configuration of BGP and OSPF protocols",
			"Worked extensively with Palo Alto and Cisco ASA firewalls to configure and support robust security measures protecting critical network infrastructure"
		]
	},
];

const Experience = () => {
	return (
		<>
			<SEO 
				title="Professional Experience - Ddumba Abdallah Kato"
				description="View my professional experience across SymphonyAI, Kyakabi Group, Nexus Cloud Solutions, CodeClause, and Oasis Infobyte. AI infrastructure, platform engineering, DevOps, and networking."
				canonicalUrl="https://ddumba.kyakabi.com/experience"
			/>
			<div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
				<ScrollAnimation>
					<h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
						<Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
						Professional Experience
					</h2>
				</ScrollAnimation>

				<div className="space-y-8 sm:space-y-12">
					{experiences.map((exp, index) => (
						<ScrollAnimation key={exp.title}>
							<div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
								<div className={`grid grid-cols-1 ${exp.image ? 'md:grid-cols-[1fr,300px]' : ''}`}>
									<div className="p-6 sm:p-8">
										<div className="flex items-center gap-3 mb-4 sm:mb-6">
											<div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
												<Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
											</div>
											<div>
												<h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
												<p className="text-gray-400 text-base sm:text-lg">{exp.company}</p>
											</div>
										</div>

										<div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
											<MapPin className="w-4 h-4" />
											<span>{exp.location}</span>
											<span>•</span>
											<span>{exp.period}</span>
										</div>

										<ul className="space-y-3 sm:space-y-4">
											{exp.description.map((item, i) => (
												<li
													key={i}
													className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
												>
													<ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
													<span className="leading-relaxed">{item}</span>
												</li>
											))}
										</ul>

										{exp.certificateUrl && (
											<motion.a
												href={exp.certificateUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="md:hidden mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 text-sm font-medium"
												whileHover={{ scale: 1.02 }}
											>
												View Certificate
												<ExternalLink className="w-4 h-4" />
											</motion.a>
										)}
									</div>

									{exp.image && (
										<div className="relative hidden md:block">
											<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
												<img
													src={exp.image}
													alt={`${exp.company} - ${exp.title}`}
													className="w-full h-full object-cover"
												/>
												<div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent group-hover:scale-105 transition-transform duration-500" />
											</div>
											{exp.certificateUrl && (
												<div className="relative h-full flex items-center justify-center">
													<motion.a
														href={exp.certificateUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="px-8 py-3 text-white font-bold bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
														whileHover={{ y: -5 }}
													>
														View Certificate
														<ExternalLink className="w-4 h-4" />
													</motion.a>
												</div>
											)}
										</div>
									)}
								</div>
							</div>
						</ScrollAnimation>
					))}
				</div>
			</div>
		</>
	);
};

export default Experience;
