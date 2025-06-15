class PublicPage {
	HOME = '/';
	TRENDING = '/trending';
	VIDEO_GAMES = '/video-games';

	SEARCH = '/search';

	MY_CHANNEL = '/my-channel';
	SUBSCRIPTIONS = '/subscriptions';
	HISTORY = '/history';
	LIKED_VIDEOS = '/liked-videos';

	SETTINGS = '/settings';
	SEND_FEEDBACK = '/send-feedback';

	VIDEO(path: string) {
		return `/v/${path}`;
	}
	CHANNEL(path: string) {
		return `/C/${path}`;
	}
}
export const PAGE = new PublicPage();
