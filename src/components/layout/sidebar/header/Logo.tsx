import { Play } from 'lucide-react';
import Link from 'next/link';

import { PAGE } from '@/config/public-page.config';

export function Logo() {
	return (
		<Link href={PAGE.HOME} className='inline-flex items-center gap-1'>
			<Play className='text-primary' size={28} />
			<span className='font-medium text-xl'>NndTube</span>
		</Link>
	);
}
