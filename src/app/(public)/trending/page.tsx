import { Flame } from 'lucide-react';
import type { Metadata } from 'next';

import { Heading } from '@/ui/Heading';
import { VideoItem } from '@/ui/video-item/VideoItem';

import { videoService } from '@/services/video.service';
import type { VideoTypes } from '@/types/video.types';
import { PAGE } from '@/config/public-page.config';
import { FlyToRight } from '../../../utils/animations/FlyAnimation';


export const metadata: Metadata = {
	title: 'Trending',
	description: 'This is trending page',
		alternates: {
		canonical: PAGE.TRENDING,
	},
	openGraph: {
		type: 'website',
		url: PAGE.TRENDING,
		title: 'Trending Video',
	},
};

export const revalidate = 100;
export const dynamic = 'force-static';

export default async function TrendingPage() {
	const data = await videoService.getTrendVideos();
	const trendVideos = data.data 
	
	return (
		<section className='mb-10'>
			<Heading Icon={Flame}>Trending</Heading>
			<div className='gridClass'>
				{trendVideos.length? (
					trendVideos.map((video: VideoTypes) => (
					<FlyToRight key={video.title}><VideoItem  video={video} Icon={Flame} /></FlyToRight>	
					))
				) : (
					<div>Trends Temporarily unavailable</div>
				)}
			</div>
		</section>
	);
}
