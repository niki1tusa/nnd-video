'use client';

import { useQuery } from '@tanstack/react-query';
import { Compass } from 'lucide-react';

import { Heading } from '@/ui/Heading';
import { SkeletonLoader } from '@/ui/SkeletonLoader';
import { VideoItem } from '@/ui/video-item/VideoItem';
import { FlyToRight } from '../../../utils/animations/FlyAnimation';
import { videoService } from '@/services/video.service';



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
				{isLoading ? (
					<SkeletonLoader count={6} className='h-40 rounded-md' />
				) : videos.length ? (
					videos.map(video => <FlyToRight key={video.title}><VideoItem   video={video} /></FlyToRight> )
				) : (
					<div>Trends Temporarily unavailable</div>
				)}
			</div>
		</section>
	);
}
