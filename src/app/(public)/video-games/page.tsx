import { Gamepad2 } from 'lucide-react';
import type { Metadata } from 'next';

import { Heading } from '@/ui/Heading';
import { VideoItem } from '@/ui/video-item/VideoItem';

import { PAGE } from '@/config/public-page.config';

import { FlyToRight } from '@/utils/animations/FlyAnimation';

import { videoService } from '@/services/video.service';
import type { VideoTypes } from '@/types/video.types';

export const metadata: Metadata = {
	title: 'Video games',
	description: 'This is video games page',
	alternates: {
		canonical: PAGE.VIDEO_GAMES,
	},
	openGraph: {
		type: 'website',
		url: PAGE.VIDEO_GAMES,
		title: 'Video Game',
	},
};

export const revalidate = 100;
export const dynamic = 'force-static';

export default async function VideoGamesPage() {
	const data = await videoService.getGameVideos();
	const videos = data.data.videos;
	return (
		<section className='mb-10'>
			<Heading Icon={Gamepad2}>Video games</Heading>
			<div className='gridClass'>
				{videos.length ? (
					videos.map((video: VideoTypes) => (
						<FlyToRight key={video.title}>
							<VideoItem video={video} />
						</FlyToRight>
					))
				) : (
					<div>Trends Temporarily unavailable</div>
				)}
			</div>
		</section>
	);
}
