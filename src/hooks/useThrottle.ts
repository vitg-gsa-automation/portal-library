import { useState, useEffect } from 'react';

const useThrottle = (value: string, limit: number) => {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    let handler: any;
    const throttle = () => {
      clearTimeout(handler);
      handler = setTimeout(() => {
        setThrottledValue(value);
      }, limit);
    };
    throttle();

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};
export default useThrottle;
