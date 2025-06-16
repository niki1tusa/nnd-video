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
			<div className='gridClass'>
				{isLoading
					? <SkeletonLoader count={6} className='h-40 rounded-md'/>
					: videos.length !== 0 &&
						videos.map(video => <VideoItem key={video.title} video={video} />)}
			</div>
		</section>
	);
}
