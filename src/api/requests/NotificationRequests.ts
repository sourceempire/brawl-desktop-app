import Fetcher from 'api/Fetcher';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const setNotificationRead = (notificationId: string) =>
  Fetcher.post(`${SERVER_URL}/api/notification/read`, { notificationId });
