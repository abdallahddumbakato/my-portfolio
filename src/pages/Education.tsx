'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText, ExternalLink, Star } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import Image from 'next/image';
import SEO from '@/components/SEO';

const Education = () => {
	const educationData = [
		{
			school: "YMCA Comprehensive Institute",
			location: "Kampala, Uganda",
			duration: "2023 - PRESENT",
			degree: "Bachelor of Science in Information Technology (Final Year)",
			grade: "GPA: 4.0/4.0",
			image: "/education/graduation-ymca.jpg",
			resultUrl: "/files/education_pdf/Transcript.pdf",
			coursework: [
				"Web Technologies",
				"Database Systems", 
				"Cloud Computing",
				"Software Engineering",
				"Algorithms",
				"Network Security"
			],
			description: "Currently pursuing my Bachelor's degree in Information Technology with a perfect 4.0 GPA. My studies focus on modern web technologies, database management systems, and cloud computing. I'm actively engaged in practical projects that apply theoretical knowledge to real-world software development challenges."
		},
		{
			school: "Islamic University in Uganda",
			location: "Mbale, Uganda", 
			duration: "2015 - 2018",
			degree: "Bachelor of Science in Computer Science, First Class Honours",
			grade: "GPA: 4.58/5.0",
			image: "/education/school_img.jpg",
			resultUrl: "/files/education_pdf/HS MARK SHEET.pdf",
			coursework: [
				"Database Systems",
				"Software Engineering",
				"Algorithms",
				"Data Structures",
				"Operating Systems",
				"Computer Networks"
			],
			description: "Graduated with First Class Honours in Computer Science, building a strong foundation in software development principles. The program emphasized database systems, software engineering methodologies, and algorithmic problem-solving, providing me with comprehensive technical skills for professional software development."
		},
		{
			school: "Kyaddondo Secondary School",
			location: "P.O Box 25355 Kampala | Kiryagonja Village, Matugga Along Matugga - Wakiso Road, In Matugga Village",
			duration: "2013",
			degree: "Uganda Advanced Certificate of Education (UACE)",
			grade: "Principal Level: Geometrical & Building Drawing (Grade C)",
			image: "/education/kyaddondoss-aerial.JPG",
			resultUrl: "/files/education_pdf/UACE.pdf",
			subjects: [
				"Geometrical & Building Drawing (Principal)",
				"General Paper (Subsidiary)",
				"Mathematics (Subsidiary)", 
				"Physics (Subsidiary)",
				"Subsidiary Computer"
			],
			description: "Completed Uganda Advanced Certificate of Education at age 19 with principal level in Geometrical & Building Drawing. The curriculum provided a strong foundation in technical drawing and scientific subjects, developing analytical and problem-solving skills.",
			achievement: "Principal level achievement in technical drawing subjects"
		},
		{
			school: "Kyaddondo Secondary School", 
			location: "P.O Box 25355 Kampala | Kiryagonja Village, Matugga Along Matugga - Wakiso Road, In Matugga Village",
			duration: "2010",
			degree: "Uganda Certificate of Education (UCE)",
			grade: "Division I (First Division)",
			image: "/education/kyaddondoss-aerial2.jpg",
			resultUrl: "/files/education_pdf/UCE.pdf",
			subjects: [
				"Islamic Religious Education (Grade 1)",
				"Mathematics (Grade 2)",
				"History (Grade 2)",
				"English (Grade 4)",
				"Geography (Grade 4)",
				"Physics (Grade 4)",
				"Chemistry (Grade 4)",
				"Biology (Grade 4)",
				"Technical Drawing (Grade 4)",
				"Commerce (Grade 4)"
			],
			description: "Completed Uganda Certificate of Education with Division I (First Division) at age 16, passing all 10 subjects taken. Demonstrated strong academic performance with excellent results in Islamic Religious Education, Mathematics, and History.",
			achievement: "Completed UCE with Division I at age 16, passing all 10 subjects"
		}
	];

	return (
		<>
			<SEO 
				title="Education & Academic Background - Ddumba Abdallah Kato"
				description="View my academic journey including Bachelor of Science in Information Technology (4.0 GPA), Computer Science (First Class Honours), and secondary education achievements from Uganda."
				canonicalUrl="https://ddumba.kyakabi.com/education"
			/>
			<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
				<ScrollAnimation>
					<motion.div
						className="flex items-center gap-3 mb-12"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<GraduationCap className="w-8 h-8" />
						<h2 className="text-4xl font-bold gradient-text">Education</h2>
					</motion.div>
				</ScrollAnimation>

				<div className="space-y-12">
					{educationData.map((edu, index) => (
						<ScrollAnimation key={`${edu.school}-${edu.duration}`}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all"
							>
								<div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
									<Calendar className="w-4 h-4 text-gray-300" />
									<span className="text-gray-300">{edu.duration}</span>
								</div>

								<div className="grid md:grid-cols-[300px,1fr] gap-6">
									{/* Left Column - Image */}
									<div className="relative h-64 md:h-full">
										<Image
											src={edu.image}
											alt={`${edu.school} - ${edu.degree}`}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, 300px"
											priority={index < 2}
											quality={90}
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
											<div className="p-6">
												<h3 className="text-xl font-bold mb-2">{edu.school}</h3>
												<div className="flex items-center gap-2 text-gray-300 mb-1">
													<MapPin className="w-4 h-4" />
													<span>{edu.location}</span>
												</div>
												<div className="flex items-center gap-2 text-gray-300">
													<Award className="w-4 h-4" />
													<span>{edu.grade}</span>
												</div>
											</div>
										</div>
									</div>

									{/* Right Column - Content */}
									<div className="p-6">
										<div className="flex items-center gap-2 mb-4">
											<BookOpen className="w-5 h-5 text-gray-400" />
											<h4 className="text-lg font-semibold">{edu.degree}</h4>
										</div>

										<div className="flex items-start gap-2 text-gray-300 mb-6">
											<FileText className="w-5 h-5 mt-1 flex-shrink-0" />
											<p className="text-sm leading-relaxed">{edu.description}</p>
										</div>

										{edu.achievement && (
											<div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
												<div className="flex items-center gap-2 text-yellow-400">
													<Star className="w-4 h-4" />
													<span className="text-sm font-semibold">Key Achievement:</span>
												</div>
												<p className="text-yellow-300 text-sm mt-1">{edu.achievement}</p>
											</div>
										)}

										{edu.coursework && (
											<div className="mb-6">
												<h5 className="text-sm font-semibold mb-3 text-gray-300">Relevant Coursework:</h5>
												<div className="flex flex-wrap gap-2">
													{edu.coursework.map((course) => (
														<span
															key={course}
															className="px-3 py-1 bg-white/10 rounded-full text-sm"
														>
															{course}
														</span>
													))}
												</div>
											</div>
										)}

										{edu.subjects && (
											<div className="mb-6">
												<h5 className="text-sm font-semibold mb-3 text-gray-300">Subjects:</h5>
												<div className="flex flex-wrap gap-2">
													{edu.subjects.map((subject) => (
														<span
															key={subject}
															className="px-3 py-1 bg-white/10 rounded-full text-sm"
														>
															{subject}
														</span>
													))}
												</div>
											</div>
										)}

										<motion.a
											href={edu.resultUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
											whileHover={{ scale: 1.02 }}
										>
											View Certificate
											<ExternalLink className="w-4 h-4" />
										</motion.a>
									</div>
								</div>
							</motion.div>
						</ScrollAnimation>
					))}
				</div>
			</div>
		</>
	);
};

export default Education;
