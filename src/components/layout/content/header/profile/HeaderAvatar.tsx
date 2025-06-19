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
		<div className='relative'>
			<Link href={STUDIO_PAGE.SETTINGS} className='shrink-0'>
				<Image
					src={profile?.channel?.avatarUrl || '/default_avatar.png'}
					alt=''
					width={40}
					height={40}
					className='rounded-lg'
				/>
			</Link>
			{profile?.verificationToken && (
				<div className='absolute -left-3.5 -bottom-3 p-0.5 bg-primary rounded text-xs w-max'>
					Not verified!
				</div>
			)}
		</div>
	);
}
