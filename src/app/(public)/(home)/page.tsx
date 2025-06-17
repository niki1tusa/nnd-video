import { Flame } from 'lucide-react';
import type { Metadata } from 'next';

import { Heading } from '@/ui/Heading';
import { VideoItem } from '@/ui/video-item/VideoItem';

import { FlyToRight } from '@/utils/animations/FlyAnimation';

import Explore from '../explore/Explore';
import { videoService } from '@/services/video.service';
import type { VideoTypes } from '@/types/video.types';

export const revalidate = 100;
export const dynamic = 'force-static';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Gentle platform for watch video',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		url: '/',
		title: 'NND Video',
	},
};
export default async function Home() {
	const data = await videoService.getTrendVideos();
	const trendVideos = data.data.slice(0, 6);

	return (
		<section>
			{!!trendVideos && (
				<section className='mb-10'>
					<Heading Icon={Flame}>Trending</Heading>
					<div className='gridClass'>
						{trendVideos.map((video: VideoTypes) => (
							<FlyToRight key={video.title}>
								<VideoItem video={video} Icon={Flame} />
							</FlyToRight>
						))}
					</div>
				</section>
			)}
			<Explore />
		</section>
	);
}
