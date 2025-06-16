import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	Icon?: LucideIcon;
	isH1?: boolean;
}

export function Heading({ children, Icon, isH1 }: Props) {
	return (
		<div className='flex items-center gap-1.5 mb-4 opacity-90'>
			{Icon && <Icon className='text-primary' />}
			{isH1 ? (
				<h1 className='font-semibold text-lg'>{children}</h1>
			) : (
				<h2 className='font-semibold text-lg'>{children}</h2>
			)}
		</div>
	);
}
