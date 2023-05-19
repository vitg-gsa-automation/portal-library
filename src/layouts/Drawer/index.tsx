import * as Dialog from '@radix-ui/react-dialog';
import { forwardRef } from 'react';
import { ReactNode } from 'react';

import { MaterialIcon } from '../../components/MaterialIcon';
import styles from './index.module.scss';

interface DrawerContentProps extends Dialog.DialogContentProps {}

export const DrawerRoot = Dialog.Root;
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

export interface DrawerProps {
  children?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaulOpen?: boolean;
  icon?: string;
}

export function Drawer({
  open,
  onOpenChange,
  icon = 'info',
  children,
}: DrawerProps) {
  return (
    <DrawerRoot modal={false} open={open} onOpenChange={onOpenChange}>
      <DrawerContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        aria-describedby={undefined}
        className={styles.animated}
        forceMount
        asChild
      >
        <div className={styles.root}>
          <DrawerTrigger className={styles.trigger}>
            <MaterialIcon icon={icon} type="outlined" fontSize="2rem" />
          </DrawerTrigger>
          <div className={styles.children}>{children}</div>
        </div>
      </DrawerContent>
    </DrawerRoot>
  );
}
