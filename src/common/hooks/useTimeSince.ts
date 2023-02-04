import { useCallback, useEffect, useState } from 'react';
import { getTimeSince } from 'utils/dateUtils';

const DEFAULT_INTERVAL = 5000;

type Options = {
  interval?: number; // in mili seconds
};

const useTimeSince = (date: Date, options?: Options) => {
  const [timeSince, setTimeSince] = useState<string>(getTimeSince(date));

  const updateTimeSince = useCallback((updatedTimeSince: string) => {
    setTimeSince(updatedTimeSince);
  }, []);

  useEffect(() => {
    const intervalRef = setInterval(
      () => updateTimeSince(getTimeSince(date)),
      options?.interval || DEFAULT_INTERVAL
    );
    return () => clearInterval(intervalRef);
  });

  return timeSince;
};

export default useTimeSince;
