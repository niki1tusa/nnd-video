import type { ChannelTypes } from './channel.types';
import type { WatchHistoryTypes } from './watch-history.types';

export interface UserTypes {
	id: string;
	name?: string;
	email: string;
}
export interface FullUserTypes extends UserTypes {
	channel?: ChannelTypes;
    subscriptions: ChannelTypes[];
    watchHistory: WatchHistoryTypes
}
