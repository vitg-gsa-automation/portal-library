import { useContext, createContext } from 'react';

export interface AppLayoutContextProps {
  dynamicOverlapHeight: number;
  setDynamicOverlapHeight?: (height: number) => void;
}

export const AppLayoutContext = createContext<AppLayoutContextProps>({
  dynamicOverlapHeight: 0,
});

export function useAppLayoutContext() {
  return useContext(AppLayoutContext);
}
