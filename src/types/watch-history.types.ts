import type { UserTypes } from './user.types';
import type { VideoTypes } from './video.types';

export interface WatchHistoryTypes{
	id: string;
	watchedAt: string;
	user: UserTypes;
	video: VideoTypes;
}
