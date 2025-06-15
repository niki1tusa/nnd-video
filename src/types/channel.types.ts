import type { UserTypes } from './user.types';
import type { VideoTypes } from './video.types';

export interface ChannelTypes {
	id: string;
	slug: string;
	name: string
	description: string;
	isVerified: boolean;
	user: UserTypes
	avatarUrl: string;
	bannerUrl: string;
	// user: string
	videos: VideoTypes[];
	subscribers: [];
	createdAt: string;
}
