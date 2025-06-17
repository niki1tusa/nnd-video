import cn from 'clsx';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { Layout } from '@/components/layout/Layout';

import { Providers } from '@/providers/Provider';

import './globals.css';

const openSans = Open_Sans({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		absolute: 'NND Video',
		template: `%s | NND Video`
	},
	description: 'Gentle app for watching video.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(openSans.className, `bg-bg text-white `)}>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
