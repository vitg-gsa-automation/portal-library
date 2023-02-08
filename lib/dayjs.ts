import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);
dayjs.extend(utc);

export function formatDate(dateString?: string) {
  return dayjs(dateString).format('MMM D, YYYY h:mm A');
}

export default dayjs;
