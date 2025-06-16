'use client'
import { useState, type PropsWithChildren } from 'react';
import '../../app/globals.css'
import cn from 'clsx'
import { Content } from './content/Content';
import { Sidebar } from './sidebar/Sidebar';

export function Layout({ children }: PropsWithChildren<unknown>) {

const [showSidebar, setShowSidebar] = useState(true)
const toggleSidebar = () => setShowSidebar(!showSidebar)

	return (
		<main className={cn('flex min-h-screen initialSidebar', showSidebar? 'showedSidebar': 'hidedSidebar')}>
			<Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
			<Content>{children}</Content>
		</main>
	);
}
