import { useContext, useLayoutEffect } from 'react';

import { AppLayoutContext } from '../layouts/AppLayout/context';
import { useContainerSize } from './useContainerSize';

export interface UseDynamicOverlapProps {
  disabled?: boolean;
}

export function useDynamicOverlap<T extends HTMLElement>(
  props?: UseDynamicOverlapProps
) {
  const disabled = props?.disabled ?? false;
  const { setDynamicOverlapHeight } = useContext(AppLayoutContext);
  const [overlapSize, overlapElementRef] = useContainerSize<T>();

  useLayoutEffect(
    function handleDynamicOverlapHeight() {
      if (!setDynamicOverlapHeight) return;
      if (!disabled) {
        setDynamicOverlapHeight(overlapSize?.height ?? 0);
      }

      return () => {
        if (!disabled) {
          setDynamicOverlapHeight(0);
        }
      };
    },
    [disabled, overlapSize?.height, setDynamicOverlapHeight]
  );

  return overlapElementRef;
}
