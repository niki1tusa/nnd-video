import cn from 'clsx';
import {match} from 'path-to-regexp'
import type { SidebarItem } from '../sidebar.types';

import { MenuItem } from './MenuItem';
import { usePathname } from 'next/navigation';

interface Props {
	title?: string;
	menu: SidebarItem[];
	showSidebar?: boolean;
}
export const SidebarMenu = ({ showSidebar, menu, title }: Props) => {
	const pathname = usePathname()
	return (
		<nav>
			{title && (
				<div
					className={cn('mb-3  uppercase text-xs font-medium transition-all duration-350 ease-in-out', 
						showSidebar? 'opacity-20': 'opacity-0')}
				>
					{title}
				</div>
			)}
			<ul>
				{menu.map(item => (
					<MenuItem key={item.label} item={item} isActive={!!match(item.link)(pathname)} showSidebar={showSidebar}/>
				))}
			</ul>
		</nav>
	);
};
