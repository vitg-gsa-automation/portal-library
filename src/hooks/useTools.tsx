import { ReactElement, useState } from 'react';

export function useTools(tools: ReactElement[]) {
  const [toolsIndex, setToolsIndex] = useState(0);
  const [toolsOpen, setToolsOpen] = useState(false);
  const openTool = function (index: number) {
    if (typeof index !== 'number') return;
    if (!tools[index]) return;
    setToolsIndex(index);
    setToolsOpen(true);
  };
  return {
    activeTool: tools[toolsIndex],
    toolsIndex,
    toolsOpen,
    setToolsIndex,
    setToolsOpen,
    openTool,
  };
}
