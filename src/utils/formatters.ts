import { formatDistanceToNow } from 'date-fns';

export function formatPostDate(date: Date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}