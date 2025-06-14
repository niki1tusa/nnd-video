import cn from 'clsx';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { Layout } from '@/components/layout/Layout';


import './globals.css';

const openSans = Open_Sans({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'NND video',
	description: 'Gentle app for wathing video.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(openSans.className, `bg-bg text-white `)}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
