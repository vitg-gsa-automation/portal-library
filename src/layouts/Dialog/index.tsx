import { forwardRef, ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import styles from './index.module.scss';

interface DialogContentProps extends DialogPrimitive.DialogContentProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export const DialogContent = forwardRef<any, DialogContentProps>(
  (
    {
      title,
      description,
      actions,
      children,
      className,
      ...props
    }: DialogContentProps,
    ref
  ) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay} />
      <DialogPrimitive.Content {...props} ref={ref} className={styles.content}>
        <VisuallyHidden asChild>
          <DialogPrimitive.Description>
            {description}
          </DialogPrimitive.Description>
        </VisuallyHidden>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);
