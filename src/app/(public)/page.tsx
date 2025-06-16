import { Flame } from 'lucide-react';
import type { Metadata } from 'next';

import { VideoItem } from '@/ui/video-item/VideoItem';

import Explore from './explore/Explore';
import { videoService } from '@/services/video.service';
import type { VideoTypes } from '@/types/video.types';
import { Heading } from '@/ui/Heading';

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
		title: 'NND Video'
	},
};
export default async function Home() {
	const data = await videoService.getTrendVideos();
	const trendVideos = data.data.slice(0, 6);
	return (
		<section>
			<section className='mb-10'>
				<Heading Icon={Flame}>Trending</Heading> 
				<div className='gridClass'>
					{!!trendVideos &&
						trendVideos.map((video: VideoTypes) => (
							<VideoItem key={video.title} video={video} Icon={Flame} />
						))}
				</div>
			</section>
			<Explore />
		</section>
	);
}
