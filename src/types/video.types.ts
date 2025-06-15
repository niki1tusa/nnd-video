import type { ChannelTypes } from "./channel.types";

export interface VideoTypes {
	id: string;
	slug: string;
	title: string;
	description: string;
	thumbnailUrl: string;
	videoFileName: string;
	viewsCount: number;
	isPublic: boolean;
	channel: ChannelTypes;
	createdAt: string;
}
 