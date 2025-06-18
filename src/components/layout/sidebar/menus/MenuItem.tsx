import cn from 'clsx';
import Link from 'next/link';

import type { SidebarItem } from '../sidebar.types';

interface Props {
	item: SidebarItem;
	isActive: boolean;
	showSidebar?: boolean;
}
export const MenuItem = ({ item, isActive, showSidebar }: Props) => {
	return (
		<li>
			<Link href={item.link} className={cn('group py-2 flex items-center gap-3')}>
				<item.icon
					className={cn(' min-w-6', {
						'group-hover:text-primary transition group-hover:rotate-6': !isActive,
						'text-primary': isActive && !showSidebar,
					})}
				/>
				<span
					className={cn(
						'border-b border-transparent',
						isActive ? 'border-white' : 'border-transparent'
					)}
				>
					{item.label}
				</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1px] w-[90%] block bg-border my-5' />}
		</li>
	);
};
