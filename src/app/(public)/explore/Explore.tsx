'use client';

import { useQuery } from '@tanstack/react-query';

import { VideoItem } from '@/ui/video-item/VideoItem';

import { videoService } from '@/services/video.service';
import { Heading } from '@/ui/Heading';
import { Compass } from 'lucide-react';
import { SkeletonLoader } from '@/ui/SkeletonLoader';

export default function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos(),
	});
	const videos = data?.data?.videos || [];

	return (
		<section>
			<Heading Icon={Compass}>Explore</Heading>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 sm:gap-6'>
				{isLoading
					? <SkeletonLoader count={6} className='h-40 rounded-md'/>
					: videos.length !== 0 &&
						videos.map(video => <VideoItem key={video.title} video={video} />)}
			</div>
		</section>
	);
}
