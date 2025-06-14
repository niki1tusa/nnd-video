import cn from 'clsx';

import type { SidebarItem } from '../sidebar.types';

import { MenuItem } from './MenuItem';

interface Props {
	title?: string;
	menu: SidebarItem[];
	showSidebar?: boolean;
}
export const SidebarMenu = ({ showSidebar, menu, title }: Props) => {
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
					<MenuItem key={item.label} item={item} />
				))}
			</ul>
		</nav>
	);
};
