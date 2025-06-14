import { CircleAlert, Compass, Flame, FolderHeart, Gamepad, History, PanelsTopLeft, Podcast, Settings } from "lucide-react";
import type { SidebarItem } from "./sidebar.types";
import { PUBLIC_PAGE } from "@/config/public-page.config";

export const SIDEBAR_DATA: SidebarItem[] = [
{
    icon: Compass,
    label: 'Explore',
    link: PUBLIC_PAGE.HOME
},
{
    icon: Flame,
    label: 'Trending',
    link: PUBLIC_PAGE.TRENDING
},
{
    icon: Gamepad,
    label: 'Video games',
    link: PUBLIC_PAGE.VIDEO_GAMES,
    isBottomBorder: true
},
{
    icon: PanelsTopLeft,
    label: 'My channel',
    link: PUBLIC_PAGE.MY_CHANNEL
},
{
    icon: Podcast,
    label: 'Subscriptions',
    link: PUBLIC_PAGE.SUBSCRIPTIONS
},
{
    icon: History,
    label: 'History',
    link: PUBLIC_PAGE.HISTORY
},
{
    icon: FolderHeart,
    label: 'Liked videos',
    link: PUBLIC_PAGE.LIKED_VIDEOS,
    isBottomBorder: true
},
]

export const MORE_SIDEBAR_DATA: SidebarItem[] = [
 {
    icon: Settings,
    label: 'Settings',
    link: PUBLIC_PAGE.SETTINGS,
},
{
    icon: CircleAlert,
    label: 'Send Feedback',
    link: PUBLIC_PAGE.SEND_FEEDBACK,
},
]