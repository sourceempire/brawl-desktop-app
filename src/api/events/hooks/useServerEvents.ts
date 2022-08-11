import { useContext } from 'react';
import { ServerEventsContext } from 'context';

export const useServerEvents = () => {
  const { addEventListener, removeEventListener } = useContext(ServerEventsContext);
  return { addEventListener, removeEventListener };
};
