import Image from 'next/image';
import Link from 'next/link';

import { SkeletonLoader } from '@/ui/SkeletonLoader';

import { STUDIO_PAGE } from '@/config/studio-page.config';

import { useProfile } from '@/hooks/useProfile';

export function HeaderAvatar() {
	const { profile, isLoading } = useProfile();

	return isLoading ? (
		<SkeletonLoader className='w-10 mb-0 rounded-md' />
	) : (
		<Link href={STUDIO_PAGE.SETTINGS} className='shrink-0'>
			<Image
				src={profile?.channel?.avatarUrl || '/default_avatar.png'}
				alt=''
				width={40}
				height={40}
				className='rounded-lg'
			/>
		</Link>
	);
}
