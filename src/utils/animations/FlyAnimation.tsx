'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

export const FlyToRight = ({ children }: { children: ReactNode }) => {
	const variants: Variants = {
		hidden: {
			opacity: 0,
			x: -30,
			y: -10,
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut' as const,
				delay: 0.2,
			},
		},
	};
	return (
		<motion.div initial='hidden' animate='visible' variants={variants}>
			{children}
		</motion.div>
	);
};