'use client';

import cn from 'clsx';
import { type PropsWithChildren, useEffect, useState } from 'react';

import { Content } from './content/Content';
import { Sidebar } from './sidebar/Sidebar';
import { authService } from '@/services/auth.service';

import '../../app/globals.css';

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [showSidebar, setShowSidebar] = useState(true);
	const toggleSidebar = () => setShowSidebar(!showSidebar);
	useEffect(() => {
		authService.initializeAuth();
	}, []);
	return (
		<main
			className={cn(
				'flex min-h-screen initialSidebar',
				showSidebar ? 'showedSidebar' : 'hidedSidebar'
			)}
		>
			<Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</main>
	);
}
