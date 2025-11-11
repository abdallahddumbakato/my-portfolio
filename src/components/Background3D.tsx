'use client';

import React, { useEffect, useState } from 'react';

const Background3D = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const x = e.clientX - window.innerWidth / 2;
			const y = e.clientY - window.innerHeight / 2;
			setMousePosition({ x, y });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<>
			<div className="canvas-container" />
			<div className="fixed inset-0 -z-10">
				<div className="absolute inset-0 gradient-grid" />
				<div
					className="spotlight"
					style={{
						transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
					}}
				/>
			</div>
		</>
	);
};

export default Background3D;