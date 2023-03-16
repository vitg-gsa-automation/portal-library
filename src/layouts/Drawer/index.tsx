import * as Dialog from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

interface DrawerContentProps extends Dialog.DialogContentProps {}

export const Drawer = Dialog.Root;
export const DrawerTrigger = Dialog.Trigger;
export const DrawerClose = Dialog.Close;
export const DrawerTitle = Dialog.Title;
export const DrawerDescription = Dialog.Description;

export const DrawerContent = forwardRef<any, DrawerContentProps>(
  ({ children, ...props }: DrawerContentProps, ref) => (
    <Dialog.Content {...props} ref={ref}>
      {children}
    </Dialog.Content>
  )
);
