import { Bell, LayoutGrid, PlusSquare } from 'lucide-react';

import { STUDIO_PAGE } from '@/config/studio-page.config';
import Link from 'next/link';

export function HeaderLinks() {
	return (
		<div className='flex gap-3 items-center'>
			<Link href={STUDIO_PAGE.UPLOAD_VIDEO} className='transition-opacity opacity-50 hover:opacity-100'>
				<PlusSquare />
			</Link>
			<Link href={STUDIO_PAGE.HOME} className='transition-opacity opacity-50 hover:opacity-100'>
				<LayoutGrid/>
			</Link>
			<Link href={STUDIO_PAGE.HOME} className='transition-opacity opacity-50 hover:opacity-100'>
				< Bell/>
			</Link>
		</div>
	);
}
