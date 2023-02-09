import { useState } from 'react';

function useDialog(initialState: boolean = false) {
  const [open, setOpen] = useState(initialState);
  const close = () => setOpen(false);
  return { open, close, setOpen };
}
export default useDialog;
