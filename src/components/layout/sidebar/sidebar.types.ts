import type { LucideIcon } from 'lucide-react';

export interface SidebarItem {
	icon: LucideIcon;
	label: string;
	link: string;
	isBottomBorder?: boolean;
}

export interface SidebarSubItem{
	avatar: string;
	label: string;
	link: string;
    isLiveNow?: boolean,
    isRecentUpload?: boolean
}
