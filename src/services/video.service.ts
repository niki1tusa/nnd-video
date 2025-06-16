import axios from 'axios';

import type { VideoTypes } from '@/types/video.types';

interface ExploreVideosResponse {
	videos: VideoTypes[];
}
class VideoService {
	getAll(searchTerm?: string | null) {
		return axios.get(
			'http://localhost:4200/api/videos',
			searchTerm
				? {
						params: {
							searchTerm,
						},
					}
				: {}
		);
	}
	getTrendVideos() {
		return axios.get('http://localhost:4200/api/videos/trending');
	}
	getExploreVideos() {
		return axios.get<ExploreVideosResponse>('http://localhost:4200/api/videos/explore');
	}
}
export const videoService = new VideoService();
