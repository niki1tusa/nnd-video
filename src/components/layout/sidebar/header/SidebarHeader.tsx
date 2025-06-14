import { Play } from 'lucide-react';
import Link from 'next/link';

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='flex items-center gap-5 mb-15'>
			<button onClick={toggleSidebar} className='opacity-80 hover:opacity-100 transition-opacity'>
				menu
			</button>

			<Link href='/' className='flex items-center gap-1'>
				<Play className='text-primary' size={28} />
				<span className='font-medium text-xl'>NndTube</span>
			</Link>
		</div>
	);
}
