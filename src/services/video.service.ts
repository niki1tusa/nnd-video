import { axiosClassic } from '@/api/axios';

import type { VideoTypes } from '@/types/video.types';


interface ObjectVideosResponse {
	videos: VideoTypes[];
}
class VideoService {
	private _VIDEOS = '/videos';

	getAll(searchTerm?: string | null) {
		return axiosClassic.get(
			this._VIDEOS,
			searchTerm
				? {
						params: {
							searchTerm,
						},
					}
				: {}
		);
	}
	getGameVideos() {
		return axiosClassic.get<ObjectVideosResponse>(`${this._VIDEOS}/games`);
	}
	getTrendVideos() {
		return axiosClassic.get(`${this._VIDEOS}/trending`);
	}
	getExploreVideos() {
		return axiosClassic.get<ObjectVideosResponse>(`${this._VIDEOS}/explore`);
	}
}
export const videoService = new VideoService();
