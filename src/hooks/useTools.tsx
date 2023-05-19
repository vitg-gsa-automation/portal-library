import { ReactElement, ReactNode, useState } from 'react';
// type Tool = {
//   header: string;
//   content: ReactNode;
// };

export function useTools(tools: ReactElement[]) {
  const [toolsIndex, setToolsIndex] = useState(0);
  const [toolsOpen, setToolsOpen] = useState(false);
  const openTool = function (index: number) {
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
