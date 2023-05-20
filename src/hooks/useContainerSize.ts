import useResizeObserver from '@react-hook/resize-observer';
import { RefObject, useLayoutEffect, useRef, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

type UseSizeResult<T> = [Size | undefined, RefObject<T>];

export function useContainerSize<T extends HTMLElement>(): UseSizeResult<T> {
  const elementRef = useRef<T>(null);
  const [size, setSize] = useState<Size>();

  useLayoutEffect(() => {
    if (elementRef.current) {
      setSize(elementRef.current.getBoundingClientRect());
    }
  }, [elementRef]);

  // Where the magic happens
  useResizeObserver(elementRef, (entry) => {
    const { width, height } = entry.contentRect;
    // Only update size if it has actually changed
    if (width !== size?.width || height !== size?.height) {
      setSize({ width, height });
    }
  });

  return [size, elementRef];
}
