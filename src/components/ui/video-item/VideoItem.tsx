import { Check, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// import * as m from 'framer-motion/m';
import { PAGE } from '@/config/public-page.config';

import { HoverAnimationVideoItem } from '@/utils/animations/HoverAnimation';
import { transformDate } from '@/utils/transform-data';
import { transformViews } from '@/utils/transform-views';

import type { VideoTypes } from '@/types/video.types';

interface Props {
	video: VideoTypes;
	Icon?: LucideIcon;
}

export function VideoItem({ video, Icon }: Props) {
	return (
		<HoverAnimationVideoItem>
			<div className='relative mb-2'>
				<Link href={PAGE.VIDEO(video.slug)}>
					<Image
						src={video.thumbnailUrl}
						alt={video.title}
						width={320}
						height={140}
						className='rounded-md'
					/>
				</Link>
				<Link href={PAGE.CHANNEL(video.channel.slug)} className='absolute bottom-2 left-2'>
					<Image
						src={video.channel.avatarUrl}
						alt={video.title}
						width={35}
						height={35}
						className='rounded-full shadow'
					/>
				</Link>
			</div>
			<div className='mb-2 flex items-center justify-between '>
				<div className='flex items-center gap-1'>
					{Icon && <Icon className='text-primary' size={20} />}
					<span className='text-gray-400 text-sm'>{transformViews(video.viewsCount)}</span>
				</div>
				<div>
					<span className='text-gray-400 text-xs'>{transformDate(video.createdAt)}</span>
				</div>
			</div>
			<div className='mb-1'>
				<Link href={PAGE.CHANNEL(video.channel.slug)} className='line-clamp-2 leading-tight'>
					{video.title}
				</Link>
			</div>
			<div>
				<Link href={PAGE.CHANNEL(video.channel.slug)} className='flex items-center gap-1'>
					<span className='text-gray-500 text-sm'>{video.channel.user.name}</span>
					<span>{video.channel.isVerified && <Check className='text-green-500' size={15} />}</span>
				</Link>
			</div>
		</HoverAnimationVideoItem>
	);
}
