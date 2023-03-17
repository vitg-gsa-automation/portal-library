import { ReactNode, useState } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import clsx from 'clsx';

import { MaterialIcon } from '../MaterialIcon';
import styles from './index.module.scss';

type ToastStatus = 'success' | 'warning' | 'error' | 'info';

export interface Toast extends ToastPrimitive.ToastProps {
  title?: string;
  status?: ToastStatus;
  description: ReactNode;
}

interface ToastComponentProps {
  toast: Toast;
}

export function ToastComponent({ toast }: ToastComponentProps) {
  const [open, setOpen] = useState(true);
  const getIconString = function (status: ToastStatus) {
    switch (status) {
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'success':
        return 'check_circle';
      case 'info':
        return 'info';
    }
  };

  return (
    <ToastPrimitive.Root
      className={clsx(styles.root, toast.status && styles[toast.status])}
      open={open}
      onOpenChange={setOpen}
      {...toast}
    >
      {toast.status && (
        <MaterialIcon fontSize="2rem" icon={getIconString(toast.status)} />
      )}
      <div className={styles.content}>
        {toast.title && (
          <ToastPrimitive.Title className={styles.title}>
            {toast.title}
          </ToastPrimitive.Title>
        )}
        <ToastPrimitive.Description className={styles.description}>
          {toast.description}
        </ToastPrimitive.Description>
      </div>
      {!toast.open && (
        <ToastPrimitive.Close asChild>
          <MaterialIcon
            icon="close"
            className={styles.icon}
            type="outlined"
            fontSize="2rem"
          />
        </ToastPrimitive.Close>
      )}
    </ToastPrimitive.Root>
  );
}
