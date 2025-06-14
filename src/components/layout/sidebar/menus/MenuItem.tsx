import cn from 'clsx';
import Link from 'next/link';

import type { SidebarItem } from '../sidebar.types';

interface Props {
	item: SidebarItem;
}
export const MenuItem = ({ item }: Props) => {
	return (
		<li>
			<Link
				href={item.link}
				className={cn('group py-2 flex items-center gap-3')}
			>
				<item.icon className='group-hover:text-primary transition group-hover:rotate-6 min-w-6'/>
				<span>{item.label}</span>
				
			</Link>
			{item.isBottomBorder && <span className='h-[1px] w-[90%] block bg-border my-5'/>}
		</li>
	);
};
