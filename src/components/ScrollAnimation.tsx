'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface ScrollAnimationProps {
	children: React.ReactNode;
	className?: string;
}

export const ScrollAnimation = ({ children, className }: ScrollAnimationProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, y: 75 },
				visible: { opacity: 1, y: 0 }
			}}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
};