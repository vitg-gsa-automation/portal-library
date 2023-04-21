import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '../Button';
import { Card, CardContent, CardTitle } from '../../layouts/Card';
import { FormActions } from '../../layouts/FormActions';
import { ReactNode } from 'react';

import styles from './index.module.scss';
import { Box, Header, SpaceBetween } from '../../layouts';

export interface AlertDialogProps
  extends AlertDialogPrimitive.AlertDialogProps {
  title: string;
  visuallyHiddenDescription: string;
  trigger: ReactNode;
  action: ReactNode;
  children: ReactNode;
}

export function AlertDialog({
  title,
  visuallyHiddenDescription,
  trigger,
  action,
  children,
  ...props
}: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      <AlertDialogPrimitive.Trigger asChild>
        {trigger}
      </AlertDialogPrimitive.Trigger>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className={styles.overlay} />
        <AlertDialogPrimitive.Content className={styles.content}>
          <Card
            header={<Header title={title} variant="h2" />}
            footer={
              <Box float="right">
                <SpaceBetween direction="horizontal" size="xs">
                  <AlertDialogPrimitive.Cancel asChild>
                    <Button text="Cancel" color="secondary" />
                  </AlertDialogPrimitive.Cancel>
                  {action}
                </SpaceBetween>
              </Box>
            }
          >
            <VisuallyHidden asChild>
              <AlertDialogPrimitive.Description className={styles.description}>
                {visuallyHiddenDescription}
              </AlertDialogPrimitive.Description>
            </VisuallyHidden>
            {children}
          </Card>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
