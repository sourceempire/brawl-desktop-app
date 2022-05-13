import { useContext } from 'react';
import { ServerEventsContext } from 'api/events';

export const useServerEvents = () => {
  const { addEventListener, removeEventListener } = useContext(ServerEventsContext);
  return { addEventListener, removeEventListener };
};
