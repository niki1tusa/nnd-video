import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
interface Props {
	children: ReactNode;
	Icon?: LucideIcon;
	isH1?: boolean;
	isPageHeading?: boolean;
}

export function Heading({ children, Icon, isH1, isPageHeading = false }: Props) {
	return (
		<div className={clsx('flex items-center opacity-90', isPageHeading? 'gap-3 mb-6': 
			'gap-1.5 mb-4 '
		)}>
			{Icon && <Icon className='text-primary' />}
			{isH1 || isPageHeading?(
				<h1 className={clsx('font-semibold ', isPageHeading? 'text-3xl': 'text-lg')}>{children}</h1>
			) : (
				<h2 className='font-semibold text-lg'>{children}</h2>
			)}
		</div>
	);
}
