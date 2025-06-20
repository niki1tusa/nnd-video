import dynamic from 'next/dynamic';

import { SidebarHeader } from './header/SidebarHeader';
import { SidebarMenu } from './menus/SidebarMenu';
import { SidebarSubscription } from './menus/subscriptions/SidebarSubscriptions';
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data';

const DynamicLogout = dynamic(() => import('./Logout').then(mod => mod.Logout), { ssr: false });

export const Sidebar = ({
	showSidebar,
	toggleSidebar,
}: {
	showSidebar: boolean;
	toggleSidebar: () => void;
}) => {
	return (
		<aside className='whitespace-nowrap p-layout border-r border-border overflow-hidden'>
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<SidebarMenu menu={SIDEBAR_DATA} />
			<SidebarSubscription />
			<SidebarMenu showSidebar={showSidebar} title='More from NndTube' menu={MORE_SIDEBAR_DATA} />
			<DynamicLogout />
		</aside>
	);
};
