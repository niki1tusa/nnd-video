import type { ChannelTypes } from "./channel.types";
import type { FullUserTypes } from "./user.types";

export interface ISettingsData extends Pick<FullUserTypes, 'name' | 'email'> { 
    channel?: Pick<ChannelTypes, 'avatarUrl'| 'bannerUrl' | 'slug' | 'description'>
    password?: string
}