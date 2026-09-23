'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';

const experiences = [
	{
		title: "AI Solutions Engineer",
		company: "SymphonyAI",
		location: "London Area, United Kingdom · Remote",
		period: "Oct 2024 - Present",
		type: "Full-time",
		image: null,
		certificateUrl: null,
		description: [
			"Contributing to the design and delivery of enterprise AI solutions that help global banks and investment firms strengthen fraud detection, risk analysis, and compliance automation within the SymphonyAI Financial Services division.",
			"Architecting end-to-end AI workflows on Azure AI and MLflow to unify fragmented model pipelines across global financial clients addressing the challenge of manual deployment and inconsistent governance by standardising how models are trained, validated, and released.",
			"Designing retrieval-augmented generation (RAG) solutions using LangChain and Azure Cognitive Search to tackle the opacity of AI decisioning enabling auditors and compliance officers to query AI reasoning and trace the source of each insight in natural language.",
			"Developing autonomous AI agents with Python orchestration to automate high-volume compliance checks, sanctions screening, and risk reporting reducing turnaround times from days to minutes while maintaining full auditability.",
			"Embedding observability, lineage, and governance controls through OpenTelemetry, Prometheus, and Azure Monitor to overcome a lack of visibility across AI pipelines ensuring every model in production could be traced, explained, and defended to regulators.",
			"Collaborating with Chief Data Officers, risk leads, and regulators to co-design responsible AI frameworks aligned with FCA, PRA, and ISO 27001 standards bridging the gap between technical engineering and enterprise compliance requirements.",
			"Impact: Delivering a secure, transparent, and scalable AI foundation for financial institutions — reducing regulatory risk, accelerating compliance reporting, and improving the speed and accuracy of fraud and risk decisioning across the enterprise."
		]
	},
	{
		title: "AI & Cloud Solutions Engineer",
		company: "Airbus Defence and Space",
		location: "Remote",
		period: "Jul 2023 - Oct 2024",
		type: "Full-time",
		image: null,
		certificateUrl: null,
		description: [
			"Designing and delivering sovereign AI solutions across defence and satellite operations, using Microsoft Azure AI Foundry, Copilot Studio, and OpenAI Services to enable secure, mission-ready intelligence systems within multi-domain, classified environments.",
			"Designing and developing AI architectures on Azure AI Foundry and Copilot Studio to address fragmented legacy workflows, providing mission teams with secure, cloud-native platforms for AI-assisted analytics and decision-making.",
			"Building retrieval-augmented generation (RAG) pipelines using Azure OpenAI, Cognitive Search, and vector databases to overcome slow, manual data retrieval, enabling operators to query mission data and satellite telemetry in natural language with explainable outputs.",
			"Developing automation scripts and microservices in Python to replace repetitive operational tasks, improving efficiency and reducing human error across mission support systems.",
			"Implementing full AI lifecycle management with MLOps and CI/CD practices to solve deployment bottlenecks, ensuring all AI models are versioned, monitored, and continuously improved within sovereign data boundaries.",
			"Integrating AI observability and governance frameworks through Azure Monitor, OpenTelemetry, and Prometheus to address transparency and accountability gaps, allowing command teams to track performance, bias, and reliability of deployed AI systems.",
			"Collaborating with cybersecurity, flight operations, and data engineering teams to align AI solutions with NATO and Airbus sovereign standards, ensuring compliance, resilience, and operational readiness across multi-domain defence networks.",
			"Impact: Delivered sovereign AI systems that enhanced mission resilience and interoperability, allowing Airbus to integrate AI into classified command environments without compromising national security."
		]
	},
	{
		title: "AI Platform Engineer",
		company: "DWP Digital",
		location: "Remote",
		period: "Apr 2022 - Jul 2023",
		type: "Full-time",
		image: null,
		certificateUrl: null,
		description: [
			"DWP Digital underpins the UK's largest citizen-facing platforms, including Universal Credit, Pensions, and Benefits. I helped design AI and automation solutions to improve fraud detection, service delivery, and transparency within welfare systems.",
			"Developed and deployed real-time AI pipelines using Kafka and Spark, enabling proactive fraud detection across welfare and pension claim systems.",
			"Built AI model orchestration frameworks on Azure Machine Learning and MLflow, automating training, deployment, and retraining across multiple citizen-facing services.",
			"Created explainability dashboards integrating Grafana and OpenAI APIs, helping policy leaders visualise and justify AI-driven decisions in compliance with GDS standards.",
			"Automated infrastructure provisioning with Terraform and GitHub Actions, improving release reliability for AI models without service downtime.",
			"Worked cross-functionally with policy, risk, and technology teams to align data ethics and algorithmic fairness with DWP's public-service mission.",
			"Documented and modelled AI ecosystems in Archimate, mapping interactions between data, services, and policy to support long-term AI strategy.",
			"Impact: Improved accuracy and fairness of welfare processing, reduced fraud losses, and enhanced public trust in DWP's use of AI for citizen services."
		]
	},
	{
		title: "AI Systems Engineer",
		company: "Monzo Bank",
		location: "Remote",
		period: "May 2020 - Apr 2022",
		type: "Full-time",
		image: null,
		certificateUrl: null,
		description: [
			"At Monzo, one of the UK's leading digital banks, I contributed to the development of AI systems that improved fraud detection, compliance automation, and customer experience through data-driven intelligence.",
			"Engineered real-time fraud detection pipelines using Kafka, Flink, and PyTorch, processing millions of transactions daily to identify anomalies instantly.",
			"Implemented NLP-powered support automation using Hugging Face Transformers, cutting manual query resolution time for operations teams.",
			"Built explainability tooling and model-monitoring dashboards for FCA audits, providing visibility into model logic and bias detection.",
			"Integrated MLOps practices through GitHub Actions and MLflow, ensuring reproducibility and traceability for all production models.",
			"Collaborated with risk and compliance teams to align AI pipeline design with financial regulatory frameworks.",
			"Contributed to data-driven product innovation, enabling Monzo to roll out new personalised financial features powered by behavioural AI.",
			"Impact: Strengthened Monzo's fraud prevention and regulatory posture while enabling faster, data-informed innovation in customer-facing financial products."
		]
	},
	{
		title: "AI & Cloud Platform Engineer",
		company: "The Game Company",
		location: "Remote",
		period: "Sept 2018 - May 2020",
		type: "Full-time",
		image: null,
		certificateUrl: null,
		description: [
			"TGC is an AI-powered cloud gaming platform. I designed and automated systems that used data and machine learning to enhance gameplay experience, matchmaking accuracy, and player retention.",
			"Built low-latency AI recommendation systems with TensorFlow and Redis Streams, optimising matchmaking and content delivery globally.",
			"Architected real-time analytics pipelines for player engagement telemetry, providing game designers with actionable insight.",
			"Deployed AI-driven platform updates through Kubernetes, ArgoCD, and AWS/GCP pipelines, achieving sub-minute global rollouts.",
			"Developed reinforcement learning agents to dynamically adjust game difficulty and player experience.",
			"Worked with data scientists and developers to productionise AI prototypes into scalable, monitored services.",
			"Improved cross-region performance through CDN and caching strategies integrated with AI load balancing.",
			"Impact: Enhanced player retention and experience by integrating adaptive AI systems into live operations — directly improving engagement metrics and revenue performance."
		]
	},
	{
		title: "Automation Engineer",
		company: "ABB (Industrial Automation)",
		location: "Remote",
		period: "May 2017 - Sept 2018",
		type: "Full-time",
		image: null,
		certificateUrl: null,
		description: [
			"At ABB, I worked on industrial automation projects that combined IoT, AI, and predictive analytics to optimise energy systems and production reliability across manufacturing and utilities clients.",
			"Developed IoT data pipelines using Azure IoT Hub and Databricks, connecting thousands of field devices for live telemetry.",
			"Applied AI-driven predictive maintenance models with TensorFlow and Scikit-learn, reducing unplanned downtime for energy clients.",
			"Automated training and deployment pipelines through Azure DevOps and Terraform, standardising MLOps across industrial plants.",
			"Built digital twins of industrial systems, enabling simulation-based diagnostics and performance optimisation.",
			"Collaborated with operations teams to translate maintenance knowledge into AI rule engines and alerts.",
			"Implemented edge-to-cloud data security standards, ensuring reliable, compliant transmission of sensitive operational data.",
			"Impact: Improved system reliability and reduced downtime for clients through predictive AI solutions that optimised operations across energy and manufacturing networks."
		]
	},
	{
		title: "Cloud Engineer",
		company: "Cargill",
		location: "Remote",
		period: "Jul 2014 - Apr 2017",
		type: "Full-time",
		image: null,
		certificateUrl: null,
		description: [
			"One of the world's largest food and agriculture companies, operating across 70+ countries. As a Cloud Engineer at Cargill, I supported the design and automation of AWS-based platforms powering food supply, processing, and sustainability initiatives, focussing on cloud migration, performance optimisation, and security to enable reliable digital solutions across Cargill's global operations.",
			"Supported the migration of supply chain applications to AWS, reducing infrastructure costs by 22% and improving scalability for global logistics and food processing systems.",
			"Automated infrastructure builds with Terraform, cutting provisioning time by 55% and enabling faster delivery of digital solutions to agriculture and sustainability teams.",
			"Improved system performance and reliability by optimising autoscaling groups, storage tiers, and load balancers, reducing application downtime by 35% and enhancing efficiency in food production and distribution workflows.",
			"Implemented cloud monitoring and observability using AWS CloudWatch, Azure Monitor, and custom dashboards, reducing mean time to detection (MTTD) and recovery (MTTR) by 30%, giving global operations teams real-time visibility.",
			"Strengthened cloud security compliance by deploying IAM controls, encryption policies, and automated vulnerability scans, reducing critical security findings by 28% and ensuring alignment with regulatory and corporate standards."
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
