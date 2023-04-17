import useResizeObserver from '@react-hook/resize-observer';
import { RefObject, useLayoutEffect, useRef, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

type UseSizeResult<T> = [Size | undefined, RefObject<T>];

export function useSize<T extends HTMLElement>(): UseSizeResult<T> {
  const elementRef = useRef<T>(null);
  const [size, setSize] = useState<Size>();

  useLayoutEffect(() => {
    if (elementRef.current) {
      setSize(elementRef.current.getBoundingClientRect());
    }
  }, [elementRef]);

  // Where the magic happens
  useResizeObserver(elementRef, (entry) => setSize(entry.contentRect));

  return [size, elementRef];
}
