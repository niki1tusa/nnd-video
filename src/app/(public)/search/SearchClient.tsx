'use client';

import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { Heading } from '@/ui/Heading';
import { SkeletonLoader } from '@/ui/SkeletonLoader';
import { VideoItem } from '@/ui/video-item/VideoItem';

import { videoService } from '@/services/video.service';
import type { VideoTypes } from '@/types/video.types';

export default function SearchClient() {
	const searchParams = useSearchParams();


	const { data, isLoading } = useQuery({
		queryKey: ['search', searchParams.get('term')],
		queryFn: () => videoService.getAll(searchParams.get('term')),
	});
	const videos = data?.data?.videos || [];

	return (
		<section>
			<Heading isH1={true} Icon={Search}>
				Search by &quot;{searchParams.get('term')}&quot;
			</Heading>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 sm:gap-6'>
				{isLoading ? (
					<SkeletonLoader count={6} className='h-40 rounded-md' />
				) : (
					videos.length ?
					videos.map((video: VideoTypes) => <VideoItem key={video.title} video={video} />)
                    : <div>Searcher is not found</div>
				)}
			</div>
		</section>
	);
}
