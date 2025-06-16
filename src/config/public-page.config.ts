class PublicPage {
	HOME = '/';
	TRENDING = '/trending';
	VIDEO_GAMES = '/video-games';

	MY_CHANNEL = '/my-channel';
	SUBSCRIPTIONS = '/subscriptions';
	HISTORY = '/history';
	LIKED_VIDEOS = '/liked-videos';

	SEND_FEEDBACK = '/send-feedback';

	VIDEO(path: string) {
		return `/v/${path}`;
	}
	CHANNEL(path: string) {
		return `/C/${path}`;
	}

	SEARCH(searchTerm: string){
		return `/search?term=${searchTerm}`
	}
}
export const PAGE = new PublicPage();
