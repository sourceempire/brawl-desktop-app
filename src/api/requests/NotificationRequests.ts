import Fetcher from 'api/Fetcher';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const setNotificationRead = (notificationId: string) =>
  Fetcher.post(`${SERVER_URL}/api/notification/read`, { notificationId });
