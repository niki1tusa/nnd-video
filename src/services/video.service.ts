import type { VideoTypes } from '@/types/video.types'
import axios from 'axios'
interface ExploreVideosResponse {
    videos: VideoTypes[];
}
class VideoService {
    getTrendVideos(){
        return axios.get('http://localhost:4200/api/videos/trending')
    }
    getExploreVideos(){
        return axios.get<ExploreVideosResponse>('http://localhost:4200/api/videos/explore')
    }
}
export const videoService = new VideoService()