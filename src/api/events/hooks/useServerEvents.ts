import { useContext } from 'react';
import { ServerEventsContext } from 'context';

export const useServerEvents = () => {
  const { addServerEventListener, removeServerEventListener } = useContext(ServerEventsContext);
  return { addServerEventListener, removeServerEventListener };
};
