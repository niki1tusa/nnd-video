'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const HoverAnimationVideoItem = ({ children }: {children: ReactNode}) => {
	return (
		<motion.div
			className='max-w-[320px]'
			whileHover={{
				scale: 1.03,
				y: -5,
			}}
			transition={{
				type: 'spring',
				stiffness: 500,
				damping: 30,
			}}
		>
			{children}
		</motion.div>
	);
};
