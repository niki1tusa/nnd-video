import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function transformDate(createdAt: string): string {
    return dayjs(createdAt).fromNow()
}
