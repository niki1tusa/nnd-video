import { CircleAlert, Compass, Flame, FolderHeart, Gamepad, History, PanelsTopLeft, Podcast, Settings } from "lucide-react";
import type { SidebarItem } from "./sidebar.types";
import { PAGE } from "@/config/public-page.config";

export const SIDEBAR_DATA: SidebarItem[] = [
{
    icon: Compass,
    label: 'Explore',
    link: PAGE.HOME
},
{
    icon: Flame,
    label: 'Trending',
    link: PAGE.TRENDING
},
{
    icon: Gamepad,
    label: 'Video games',
    link: PAGE.VIDEO_GAMES,
    isBottomBorder: true
},
{
    icon: PanelsTopLeft,
    label: 'My channel',
    link: PAGE.MY_CHANNEL
},
{
    icon: Podcast,
    label: 'Subscriptions',
    link: PAGE.SUBSCRIPTIONS
},
{
    icon: History,
    label: 'History',
    link: PAGE.HISTORY
},
{
    icon: FolderHeart,
    label: 'Liked videos',
    link: PAGE.LIKED_VIDEOS,
    isBottomBorder: true
},
]

export const MORE_SIDEBAR_DATA: SidebarItem[] = [
 {
    icon: Settings,
    label: 'Settings',
    link: PAGE.SETTINGS,
},
{
    icon: CircleAlert,
    label: 'Send Feedback',
    link: PAGE.SEND_FEEDBACK,
},
]