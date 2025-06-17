import { Menu } from 'lucide-react';

import { Logo } from './Logo';

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='flex items-center gap-5 mb-15'>
			<button onClick={toggleSidebar} className='opacity-80 hover:opacity-100 transition-opacity'>
				<Menu />
			</button>
			<Logo />
		</div>
	);
}
