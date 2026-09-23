'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, MessageSquare, Lightbulb, Users, Brain,
	Cloud, Terminal, Wrench, Network, ShieldCheck, Boxes, Activity, GitBranch,
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
	PythonLogo, GitLogo
} from '@/components/TechLogos';
import SEO from '@/components/SEO';

const skills = [
	{
		category: 'Machine Learning & GenAI',
		icon: <Brain className="w-6 h-6" />,
		items: [
			{ name: 'Azure ML', icon: <Cloud className="w-4 h-4" /> },
			{ name: 'Azure OpenAI', icon: <Brain className="w-4 h-4" /> },
			{ name: 'Hugging Face', icon: <Boxes className="w-4 h-4" /> },
			{ name: 'LangChain', icon: <Boxes className="w-4 h-4" /> },
			{ name: 'MLflow', icon: <Activity className="w-4 h-4" /> }
		]
	},
	{
		category: 'Data Engineering & Pipelines',
		icon: <Database className="w-6 h-6" />,
		items: [
			{ name: 'Azure Data Factory', icon: <Server className="w-4 h-4" /> },
			{ name: 'Synapse', icon: <Database className="w-4 h-4" /> },
			{ name: 'Databricks', icon: <Boxes className="w-4 h-4" /> },
			{ name: 'Delta Lake', icon: <Database className="w-4 h-4" /> }
		]
	},
	{
		category: 'MLOps & Automation',
		icon: <GitBranch className="w-6 h-6" />,
		items: [
			{ name: 'GitHub Actions', icon: <GitLogo /> },
			{ name: 'Azure DevOps', icon: <Wrench className="w-4 h-4" /> },
			{ name: 'AKS & Docker', icon: <Boxes className="w-4 h-4" /> },
			{ name: 'MLflow', icon: <Activity className="w-4 h-4" /> }
		]
	},
	{
		category: 'Cloud Infrastructure (Azure)',
		icon: <Cloud className="w-6 h-6" />,
		items: [
			{ name: 'VNets', icon: <Network className="w-4 h-4" /> },
			{ name: 'Managed Identities', icon: <ShieldCheck className="w-4 h-4" /> },
			{ name: 'Private Endpoints', icon: <ShieldCheck className="w-4 h-4" /> },
			{ name: 'RBAC', icon: <Terminal className="w-4 h-4" /> }
		]
	},
	{
		category: 'Observability & Governance',
		icon: <Activity className="w-6 h-6" />,
		items: [
			{ name: 'OpenTelemetry', icon: <Activity className="w-4 h-4" /> },
			{ name: 'Prometheus', icon: <Activity className="w-4 h-4" /> },
			{ name: 'Model Monitoring & Drift Detection', icon: <Activity className="w-4 h-4" /> },
			{ name: 'FCA / ISO 27001 Compliance', icon: <ShieldCheck className="w-4 h-4" /> }
		]
	},
	{
		category: 'Programming & Frameworks',
		icon: <Code2 className="w-6 h-6" />,
		items: [
			{ name: 'Python', icon: <PythonLogo /> },
			{ name: 'PySpark', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'TensorFlow', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'PyTorch', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'Scikit-learn', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'REST / GraphQL APIs', icon: <Server className="w-4 h-4" /> }
		]
	},
	{
		category: 'DevOps & Collaboration',
		icon: <Wrench className="w-6 h-6" />,
		items: [
			{ name: 'Azure DevOps', icon: <Wrench className="w-4 h-4" /> },
			{ name: 'GitHub', icon: <GitLogo /> },
			{ name: 'Terraform', icon: <Layout className="w-4 h-4" /> },
			{ name: 'Bicep', icon: <Layout className="w-4 h-4" /> },
			{ name: 'Jira / Azure Boards', icon: <Boxes className="w-4 h-4" /> }
		]
	}
];

const Skills = () => {
	return (
		<>
			<SEO 
				title="Technical Skills & Expertise - Ddumba Abdallah Kato"
				description="Comprehensive overview of my technical skills including AI infrastructure (LangChain, LlamaIndex, PyTorch, Pinecone, vLLM), platform engineering (AWS, Kubernetes, Terraform, ArgoCD), observability (Prometheus, Grafana, Kafka), and networking."
				canonicalUrl="https://ddumba.kyakabi.com/skills"
			/>
			<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
				<ScrollAnimation>
					<h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
				</ScrollAnimation>

				<ScrollAnimation>
					<p className="text-gray-400 mb-12 max-w-2xl">
						A comprehensive overview of my AI infrastructure and platform engineering expertise
					</p>
				</ScrollAnimation>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skills.map((skillGroup, index) => (
						<ScrollAnimation key={skillGroup.category}>
							<div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
								<div className="flex items-center space-x-3 mb-6">
									<div className="p-2 bg-white/10 rounded-lg">
										{skillGroup.icon}
									</div>
									<h3 className="text-lg font-semibold">{skillGroup.category}</h3>
								</div>
								<div className="grid grid-cols-2 gap-4">
									{skillGroup.items.map((skill, skillIndex) => (
										<div
											key={skill.name}
											className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
										>
											<div className="text-gray-400 group-hover:text-white transition-colors">
												{skill.icon}
											</div>
											<span className="text-gray-400 group-hover:text-white transition-colors text-sm">
												{skill.name}
											</span>
										</div>
									))}
								</div>
							</div>
						</ScrollAnimation>
					))}
				</div>
			</div>
		</>
	);
};

export default Skills;
