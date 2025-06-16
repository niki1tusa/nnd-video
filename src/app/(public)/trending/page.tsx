import { Flame } from 'lucide-react';
import type { Metadata } from 'next';

import { Heading } from '@/ui/Heading';
import { VideoItem } from '@/ui/video-item/VideoItem';

import { videoService } from '@/services/video.service';
import type { VideoTypes } from '@/types/video.types';

export const metadata: Metadata = {
	title: 'Trending',
	description: 'This is trending page',
};

export const revalidate = 100;
export const dynamic = 'force-static';

export default async function TrendingPage() {
	const data = await videoService.getTrendVideos();
	const trendVideos = data.data.videos;
	return (
		<section className='mb-10'>
			<Heading Icon={Flame}>Trending</Heading>
			<div className='gridClass'>
				{trendVideos.length ? (
					trendVideos.map((video: VideoTypes) => (
						<VideoItem key={video.title} video={video} Icon={Flame} />
					))
				) : (
					<div>Trends Temporarily unavailable</div>
				)}
			</div>
		</section>
	);
}
